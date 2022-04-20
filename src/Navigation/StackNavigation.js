import React from 'react';

// Dependencias
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme, Avatar } from 'react-native-paper';
import { View } from 'react-native-animatable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

// Imports Locais
import {
    // Telas Principais
    Home,
    StoresMap,
    Notifications,
    Profile,
    // Telas Secundarias Abaixo
    Bookmarks,
    ListOfStores,
    ProfileEdit,
    Settings,
    StoreDetail,
    Support
} from '../Screens'

const Stack = createNativeStackNavigator();

export function HomeStack({ navigation }) {

    const { colors } = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // Para iOS
                    elevation: 0, // Para Android
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name='HomeStack'
                component={Home}
                options={{
                    title: 'FoodFinder',
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                color={colors.text}
                                backgroundColor={colors.background}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 10 }}>
                            <Icon.Button
                                name="ios-search"
                                size={25}
                                color={colors.text}
                                backgroundColor={colors.background}
                                onPress={() => { }}
                            />
                            <TouchableOpacity
                                style={{ paddingHorizontal: 10, marginTop: 5 }}
                                onPress={() => {
                                    navigation.navigate('Profile');
                                }}>
                                <Avatar.Image
                                    source={{
                                        uri:
                                            'https://i.ibb.co/NxzPmKz/Whats-App-Image-2022-01-19-at-17-59-12.jpg',
                                    }}
                                    size={30}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name='ListOfStores'
                component={ListOfStores}
                options={({ route }) => ({
                    title: route.params.title,
                    headerBackTitleVisible: false
                })}
            />
            <Stack.Screen
                name='StoresMap'
                component={StoresMap}
                options={{
                    headerBackTitleVisible: false,
                    headerTitle: false,
                    headerTransparent: true,
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    )
}

export function StoresMapStack() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='StoresMap'
                component={StoresMap}
            />
        </Stack.Navigator>
    )
}

export function NotificationsStack({ navigation }) {

    const { colors } = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android
                },
                headerTintColor: colors.text,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen
                name='NotificationsStack'
                component={Notifications}
                options={{
                    title: 'Notificações',
                    headerLeft: () => (
                        <Icon.Button
                            name="ios-menu"
                            size={25}
                            color={colors.text}
                            backgroundColor={colors.background}
                            onPress={() => navigation.openDrawer()}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}

export function ProfileStack({ navigation }) {

    const { colors } = useTheme();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.background,
                    shadowColor: colors.background, // iOS
                    elevation: 0, // Android
                },
                headerTintColor: colors.text,
            }}>
            <Stack.Screen
                name='ProfileStack'
                component={Profile}
                options={{
                    title: '',
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <Icon.Button
                                name="ios-menu"
                                size={25}
                                backgroundColor={colors.background}
                                color={colors.text}
                                onPress={() => navigation.openDrawer()}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 10 }}>
                            <MaterialCommunityIcons.Button
                                name="account-edit"
                                size={25}
                                backgroundColor={colors.background}
                                color={colors.text}
                                onPress={() => navigation.navigate('ProfileEdit')}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name='Bookmarks'
                component={Bookmarks}
                options={{
                    title: 'Favoritos'
                }}
            />
            <Stack.Screen
                name='Support'
                component={Support}
                options={{
                    title: 'Suporte'
                }}
            />
            <Stack.Screen
                name='Settings'
                component={Settings}
                options={{
                    title: 'Configurações'
                }}
            />
            <Stack.Screen
                name='ProfileEdit'
                component={ProfileEdit}
                options={{
                    title: 'Edite seu Perfil'
                }}
            />
            
        </Stack.Navigator>
    )
}