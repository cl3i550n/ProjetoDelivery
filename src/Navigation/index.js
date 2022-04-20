import React, { useEffect, useState, useReducer, useMemo } from 'react';
import { View, ActivityIndicator, StatusBar, StyleSheet, SafeAreaView } from 'react-native';

// Dependencias
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';

import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';

import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Imports Locais
import CustomDrawer from './Components/CustomDrawer';
import { TabHome, TabNotifyScreen } from './BottomTabs';
import { NotificationsStack, ProfileStack } from './StackNavigation'
import { AuthContext } from '../Context/AppContext';
import RootNavigation from './RootNavigation'

const Drawer = createDrawerNavigator();

export default props => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            background: '#ffffff',
            text: '#333333'
        }
    }

    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            background: '#333333',
            text: '#ffffff'
        }
    }

    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

    const authContext = useMemo(() => ({
        signIn: async (foundUser) => {
            const userToken = String(foundUser[0].userToken);
            const userName = foundUser[0].username;

            try {
                await AsyncStorage.setItem('userToken', userToken);
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
        signUp: () => {
        },
        toggleTheme: () => {
            setIsDarkTheme(isDarkTheme => !isDarkTheme);
        }
    }), []);

    useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <PaperProvider theme={theme}>
            <AuthContext.Provider value={authContext}>
                <NavigationContainer theme={theme}>
                    {loginState.userToken !== null ? (
                        <>
                            <StatusBar barStyle='light-content' backgroundColor={'#000'} />
                            <SafeAreaView style={styles.AndroidSafeArea}>
                                < Drawer.Navigator
                                    screenOptions={{ headerShown: false }}
                                    drawerContent={props => <CustomDrawer {...props} />}
                                >
                                    <Drawer.Screen name="Home" component={TabHome} />
                                    <Drawer.Screen name="Profile" component={TabNotifyScreen} />
                                    <Drawer.Screen name="Notifications" component={NotificationsStack} />
                                </Drawer.Navigator>
                            </SafeAreaView>
                        </>
                    ) : <RootNavigation />
                    }
                </NavigationContainer>
            </AuthContext.Provider>
        </PaperProvider>
    )
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 0
    }
});