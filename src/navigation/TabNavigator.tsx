import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from '../screens/DashboardScreen';
import BookingScreen from '../screens/BookingScreen';
import DoctorScreen from '../screens/DoctorScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { COLORS } from '../theme/colors';

export type TabParamList = {
    Home: undefined;
    Booking: undefined;
    Doctors: undefined;
    History: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.muted,

                tabBarStyle: {
                    height: 65,
                    paddingBottom: 8,
                    paddingTop: 8,
                    backgroundColor: COLORS.white,
                    borderTopColor: COLORS.border,
                    elevation: 8,
                },

                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: '600',
                },

                tabBarIcon: ({ color, size, focused }) => {
                    let iconName: keyof typeof Ionicons.glyphMap;

                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;

                        case 'Booking':
                            iconName = focused ? 'calendar' : 'calendar-outline';
                            break;

                        case 'Doctors':
                            iconName = focused ? 'medkit' : 'medkit-outline';
                            break;

                        case 'History':
                            iconName = focused ? 'document-text' : 'document-text-outline';
                            break;

                        default:
                            iconName = focused ? 'person' : 'person-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={DashboardScreen}
                options={{ tabBarLabel: 'Home' }}
            />

            <Tab.Screen
                name="Booking"
                component={BookingScreen}
                options={{ tabBarLabel: 'Booking' }}
            />

            <Tab.Screen
                name="Doctors"
                component={DoctorScreen}
                options={{ tabBarLabel: 'Dokter' }}
            />

            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{ tabBarLabel: 'Riwayat' }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profil' }}
            />
        </Tab.Navigator>
    );
}