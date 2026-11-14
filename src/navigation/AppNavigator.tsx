import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import {
    createNativeStackNavigator,
} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import AdminScreen from '../screens/AdminScreen';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
    Login: undefined;
    PatientTabs: undefined;
    Admin: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="PatientTabs"
                    component={TabNavigator}
                />

                <Stack.Screen
                    name="Admin"
                    component={AdminScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}