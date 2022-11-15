import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {SafeAreaView} from 'react-native-safe-area-context';

function MenuScreen(){
    return (
    // <View style={styles.block} />
    <SafeAreaView style={styles.block}>
        <Text>메뉴를 만들 공간입니다.</Text>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default MenuScreen;