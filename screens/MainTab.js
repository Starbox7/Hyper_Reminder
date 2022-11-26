import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import GithubScreen from "./GithubScreen";
import CalendarScreen from "./CalendarScreen";
import ReminderScreen from "./ReminderScreen";



const Tab = createBottomTabNavigator();

function MainTab() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="리마인더"
                component={ReminderScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="check" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="캘린더"
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcon name="event" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Github"
                component={GithubScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesignIcon name="github" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;