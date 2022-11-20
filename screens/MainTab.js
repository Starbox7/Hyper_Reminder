import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RemindersScreen from "./RemindersScreen";
import CalendarScreen from "./CalendarScreen";
import GithubScreen from "./GithubScreen";
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'


const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                showLabel: false,
                activeTintColor: '#009688',
            }}>
            <Tab.Screen
                name="리마인더"
                component={RemindersScreen}
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