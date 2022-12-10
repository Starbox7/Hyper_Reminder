import React from 'react'
import { StyleSheet, ScrollView, View, TextInput, Text, Pressable } from 'react-native'
// import { useStore } from 'zustand';
import useStore from '../Zustand/useStore';
import ReminderListItem from './ReminderListItem';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'



const TodayReminderList = () => {
    const { reminderList, nowSort } = useStore();
    return (
        reminderList.map((item, index) => {
            return (
                // <Pressable
                //     key={item.id}
                //     style={({ pressed }) => [
                //         styles.button,
                //         Platform.OS === 'ios' && {
                //             opacity: pressed ? 0.6 : 1,
                //         },
                //     ]}
                //     android_ripple={{ color: 'white' }}
                //     onLongPress={console.log('onLongPress!')}>
                    ((nowSort==true)?((new Date(item.deadLine).getFullYear()==new Date().getFullYear()&&
                    new Date(item.deadLine).getMonth()==new Date().getMonth()&&
                    new Date(item.deadLine).getDate()==new Date().getDate())):
                    (new Date(item.date).getFullYear()==new Date().getFullYear()&&
                    new Date(item.date).getMonth()==new Date().getMonth()&&
                    new Date(item.date).getDate()==new Date().getDate()))?
                    <View key={item.id} style={styles.Reminder}>
                        <View style={{ width: 40, alignItems: "flex-end", marginTop: 18, }}>
                            <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{ color: "red" }} />
                        </View>
                        <View style={styles.reminderMain}>
                            <View style={{ marginBottom: 7, marginTop: 7, }}>
                                <Text style={{ fontWeight: "bold", fontSize: 17, }}>{item.title}</Text>
                            </View>
                            {(item.checkList).map((data, index) => {
                                return (
                                    <View key={data.id} style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
                                        <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{ marginRight: 10, marginTop: 4 }} />
                                        <Text>{data.checkMemo}</Text>
                                    </View>
                                )
                            })}
                            <View style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
                                <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{ marginRight: 10, marginTop: 4 }} />
                                <Text>할일 체크 목록 6개 초과시 ... 으로 표시</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
                                <Text>...</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
                                <Text style={{ color: "#EF7C47", fontWeight: "bold", }}>오늘, 08:30</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
                                <FeatherIcon name="repeat" size={13} style={{ marginRight: 10, marginTop: 4, color: "#7D7D7D" }} />
                                <Text style={{ color: "#7D7D7D" }}>매주 (월, 화, 수, 목, 금)</Text>
                            </View>
                        </View>
                    </View>:null
                // </Pressable>
            )
        })
    )
};

const styles = StyleSheet.create({
    Reminder: {
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
    },
    reminderMain: {
        borderBottomRadius: 21,
        padding: 10,
        color: "white",
    },

});

export default TodayReminderList;