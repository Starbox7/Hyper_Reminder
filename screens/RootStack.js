import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import WriteScreen from "./WriteScreen";
import MenuScreen from "./MenuScreen";

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainTab"
                component={MainTab}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Write"
                component={WriteScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Menu"
                component={MenuScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;