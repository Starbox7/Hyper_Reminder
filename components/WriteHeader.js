import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import TransparentCircleButton from "./TransparentCircleButton";


function WriteHeader() {
    const navigation = useNavigation();
    const onGoBack = () => {
        navigation.pop();
    };
    return (
        <View style={styles.block}>
            <View style={styles.iconButtonWrapper}>
                <TransparentCircleButton
                    onPress={onGoBack}
                    name="취소"
                    color="#424242"
                />
            </View>
            <View style={styles.buttons}>
                {/* <TransparentCircleButton
                    name="delete-forever"
                    color="#ef5350"
                    hasMarginRight
                /> */}
                <TransparentCircleButton name="저장" color="#afafaf" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        height: 48,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingBottom:15,
        paddingTop: 15,
        backgroundColor: "#F4F3EF",
    },
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginRight: {
        marginRight: 8,
    },
});

export default WriteHeader;