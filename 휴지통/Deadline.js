import React, { useState, useCallback } from "react"
import { View, StyleSheet, Text, Switch, Pressable, Dimensions, ScrollView } from "react-native"
// import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';
// import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
// import { Calendar, LocaleConfig } from "react-native-calendars";
// import Swipe from "./Swipe";
// import uuid from "react-uuid";
import useStore from '../Zustand/useStore';

import DatePicker from 'react-native-modern-datepicker';


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const vw = (w) => Math.floor(chartWidth / 100 * w)
const vh = (h) => Math.floor(chartHeight / 100 * h)

function Deadline() { //{ children }
    const [date, setDate] = useState('');
    //토글 영역
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            {(isEnabled == true) ?
                <View style={styles.reminderDeadlineTrue}>
                    <Text style={{ marginLeft: 5, fontSize: 17, }}>마감 날짜</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#007FFF" }}
                        thumbColor={"#FFFFFF"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View> :
                <View style={styles.reminderDeadlineFalse}>
                    <Text style={{ marginLeft: 5, fontSize: 17, }}>마감 날짜</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#007FFF" }}
                        thumbColor={"#FFFFFF"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>}

            {/* //3가지 상태를 관리 필요: 기본, 날짜: 캘린더, 시간: 타임피커 */}
            {(isEnabled == true) ?
                <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 21, borderBottomRightRadius: 21, marginBottom: 20 }}>
                    <View style={styles.makeCalendar}>
                        {/* {children} */}
                        <DatePicker
                            onSelectedChange={(date) => setDate(date)} />
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <FeatherIcon name="repeat" size={20} style={{ marginRight: 10, color: "#7D7D7D", marginLeft: 20 }} />
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>반복 안 함</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <IoniconsIcon name="volume-high-outline" size={25} color="#7D7D7D" style={{ marginRight: 7, color: "#7D7D7D", marginLeft: 20 }} />
                            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>중간</Text>
                        </View>
                    </View>
                </View> : null}

        </View>)
}

const styles = StyleSheet.create({
    makeCalendar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    year: {
        fontSize: 20,
        color: 'black',
    },
    month: {
        fontSize: 30,
        color: 'black',
        marginBottom: vh(5),
    },
    dayContainer: {
        width: vw(91),
        height: vw(13 * 6),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // flex-flow: wrap,
        flexWrap: 'wrap',
    },
    selectedDayTextView: {
        width: vw(13),
        height: vw(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDayText: {
        width: vw(7),
        height: vw(7),
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 40,
        backgroundColor: '#007FFF'
    },
    dayText: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ddd',
        textAlignVertical: 'center',
    },
    dayTextBlack: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        textAlignVertical: 'center',
    },
    dayTextBlue: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        textAlignVertical: 'center',
    },
    dayTextRed: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
        textAlignVertical: 'center',
    },
    day: {
        width: vw(13),
        height: vw(13),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    reminderDeadlineFalse: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reminderDeadlineTrue: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        padding: 10,
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default Deadline



    // function makeDay(a, b, c, d) {
    //     // console.log(d, selectedDate)
    //     if(d == selectedDate&&selectedMonth==today.month){
    //         return <View style={styles.selectedDayTextView}><Text style={styles.selectedDayText} day={a}>{b}</Text></View>
    //     }
    //     else if(c==true){
    //         return <Text style={styles.dayText} day={a}>{b}</Text>
    //     }
    //     else if (a == "일") {
    //         return <Text style={styles.dayTextRed} day={a}>{b}</Text>
    //     }
    //     else if (a == "토") {
    //         return <Text style={styles.dayTextBlue} day={a}>{b}</Text>
    //     }
    //     else {
    //         return <Text style={styles.dayTextBlack} day={a}>{b}</Text>
    //     }
    // }
