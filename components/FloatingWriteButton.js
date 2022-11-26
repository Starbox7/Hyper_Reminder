import React from "react";
import uuid from "react-uuid";

import { useNavigation } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

function FloatingWriteButton() {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Write');
    };

    return (
        <View style={styles.floatingButton}>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    Platform.OS === 'ios' && {
                        opacity: pressed ? 0.6 : 1,
                    },
                ]}
                android_ripple={{ color: 'white' }}
                onPress={onPress}>
                <Icon name="add" size={34} style={styles.icon} />
            </Pressable>
        </View>
    );
}



const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,

        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

        elevation: 5,

        overflow: Platform.select({ android: 'hidden' }),
        zIndex: 999 //가장 앞으로! feat. j
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'black',
    },
});

export default FloatingWriteButton;