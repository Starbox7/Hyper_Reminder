import React from "react";
import { StyleSheet, View } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from "../components/WriteHeader";
import WriteEditor from "../components/WriteEditor";
import { StatusBar } from "expo-status-bar";

function WriteScreen(){
    return (
    <SafeAreaView style={styles.block}>
        <View style={{flex: 1,backgroundColor: "#F4F3EF"}}>
        {/* <statusbar style={{backgroundColor: "#ffffff"}}/> */}
        <WriteEditor/>
        <WriteHeader/>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',  //F4F3EF
    },
});

export default WriteScreen;