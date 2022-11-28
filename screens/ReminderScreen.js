import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";

import Reminder from "../components/Reminder";
import ReminderList from "../components/ReminderList";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons'
import FloatingWriteButton from "../components/FloatingWriteButton";



function ReminderScreen() {

    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('Menu');
    };
    const onPress2 = () => {
        navigation.navigate('Search');
    };
    const [Reminders, setReminders] = useState([]);
    const addReminder = title => {
        setReminders([...Todos,
        { id: uuid(), titleValue: title, checkde: false }, // check true면 완료
        ]);
    };

    return (

        <View style={{ backgroundColor: "#F4F3EF", flex: 1 }}>
            <ScrollView stickyHeaderIndices={[1]}>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: 200,
                    marginTop: 50,
                }}>
                    <Text style={{ fontSize: 35, fontWeight: "bold" }}>지난 리마인더 2개</Text>
                    <View style={{ flexDirection: "row", }}>
                        <Pressable>
                            <Text style={{
                                backgroundColor: "#ddd",
                                borderRadius: 15,
                                paddingTop: 3,
                                paddingBottom: 3,
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontWeight: "bold",
                                color: "#545454",
                                marginLeft: 5,
                                marginRight: 5,
                            }}>나중에</Text>
                        </Pressable>
                        <Pressable>
                            <Text style={{
                                backgroundColor: "#ddd",
                                borderRadius: 15,
                                paddingTop: 3,
                                paddingBottom: 3,
                                paddingLeft: 10,
                                paddingRight: 10,
                                fontWeight: "bold",
                                color: "#545454",
                                marginLeft: 5,
                                marginRight: 5,
                            }}>보기</Text>
                        </Pressable>
                    </View>
                </View>
                <View>
                    <View style={styles.MenuBar}>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    Platform.OS === 'ios' && {
                                        opacity: pressed ? 0.6 : 1,
                                    },
                                ]}
                                android_ripple={{ color: 'white' }}
                                onPress={onPress}>
                                <IoniconsIcon name="menu-outline" size={30} style={{ marginRight: 10, marginLeft: 15 }} />
                            </Pressable>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>전체</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable
                                style={({ pressed }) => [
                                    styles.button,
                                    Platform.OS === 'ios' && {
                                        opacity: pressed ? 0.6 : 1,
                                    },
                                ]}
                                android_ripple={{ color: 'white' }}
                                onPress={onPress2}>
                                <EvilIconsIcon name="search" size={30} style={{ marginRight: 15 }} />
                            </Pressable>
                            <IoniconsIcon name="ellipsis-vertical" size={20} style={{ marginTop: 2, marginRight: 25 }} />
                        </View>
                    </View>
                </View>

                <Text style={styles.ReminderCategories}>미뤄둔 일</Text>
                <Reminder/>

                <Text style={styles.ReminderCategories}>오늘</Text>


                <Text style={styles.ReminderCategories}>예정</Text>


                <Text style={styles.ReminderCategories}>알림 없음</Text>
                <ReminderList />
            </ScrollView>
            <FloatingWriteButton />
        </View>
    );
}



const styles = StyleSheet.create({

    MenuBar: {
        height: 80,
        justifyContent: "space-between",
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#F2F2F2",
        borderRadius: 15,
        paddingTop: 15,
    },
    ReminderCategories: {
        marginLeft: 20,
        color: "#6E6E6E",
        fontWeight: "bold",
        height: 20,
    },
});

export default ReminderScreen;