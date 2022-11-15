import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RemindersScreen from "./RemindersScreen";
import CalendarScreen from "./CalendarScreen";
import SearchScreen from "./SearchScreen";
import Icon from 'react-native-vector-icons/MaterialIcons'
// import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MainTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                showLabel: false,
                activeTintColor: '#009688',
            }}>
            <Tab.Screen
                name="리마인더"
                component={RemindersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="check" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="캘린더"
                component={CalendarScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" size={size} color={color} />
                    ),
                }}
            />
            {/* <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" size={size} color={color} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    )
}

export default MainTab;