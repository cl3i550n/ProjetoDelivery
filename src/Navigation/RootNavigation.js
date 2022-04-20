import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';

// Dependencias
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Imports Locais
import { Onboarding, SignIn, SignUp, ForgotPassword } from '../Screens';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <>
            <StatusBar hidden />
            <SafeAreaView style={styles.AndroidSafeArea}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Onboarding" component={Onboarding} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                </Stack.Navigator>
            </SafeAreaView>
        </>
    )
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : 0
    }
});