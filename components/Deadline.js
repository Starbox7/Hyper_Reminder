import React, { useState, useCallback } from "react"
import { View, StyleSheet, Text, Switch, Pressable, Dimensions } from "react-native"
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { Calendar, LocaleConfig } from "react-native-calendars";
import Swipe from "./Swipe";
import uuid from "react-uuid";


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const vw = (w) => Math.floor(chartWidth / 100 * w)
const vh = (h) => Math.floor(chartHeight / 100 * h)

function Deadline() {
    const [selectedDate, setSelectedDate] = useState(new Date().getDate());

    function makeDay(a, b, c, d) {
        // console.log(d, selectedDate)
        if(d == selectedDate){
            return <View style={styles.selectedDayTextView}><Text style={styles.selectedDayText} day={a}>{b}</Text></View>
        }
        else if(c==true){
            return <Text style={styles.dayText} day={a}>{b}</Text>
        }
        else if (a == "일") {
            return <Text style={styles.dayTextRed} day={a}>{b}</Text>
        }
        else if (a == "토") {
            return <Text style={styles.dayTextBlue} day={a}>{b}</Text>
        }
        else {
            return <Text style={styles.dayTextBlack} day={a}>{b}</Text>
        }
    }

    let week = ["일", "월", "화", "수", "목", "금", "토"]

    let today = {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        day: new Date().getDay()
    }
    const [selectedYear, setSelectedYear] = useState(today.year)
    const [selectedMonth, setSelectedMonth] = useState(today.month)
    const dataTotalCount = new Date(selectedYear, selectedMonth, 0).getDate()

    // my wish - slide to change
    const prevMonth = useCallback(() => {
        if (1 === selectedMonth) {
            setSelectedMonth(12)
            setSelectedYear(selectedYear - 1)
        } else {
            setSelectedMonth(selectedMonth - 1)
        }
    }, [selectedMonth])

    const nextMonth = useCallback(() => {
        if (12 === selectedMonth) {
            setSelectedMonth(1)
            setSelectedYear(selectedYear + 1)
        } else {
            setSelectedMonth(selectedMonth + 1)
        }
    }, [selectedMonth])

    const returnDate = useCallback(() => {
        let date = Array() // == []
        for (const nowDay of week) {
            const day = new Date(selectedYear, selectedMonth - 1, 1).getDay()
            if (week[day] === nowDay) {
                for (let i = 0; i < dataTotalCount; i += 1) {
                    let isFuture = new Date() > new Date(selectedYear, selectedMonth - 1, i + 2) ? true : false
                    date.push(
                        <Pressable style={styles.day} key={i + 1} disabled={isFuture} >
                            
                            {/* <NavButton nav={ScreenName.DiaryWrite}
								today={{
									year: selectedYear,
									month: selectedMonth,
									date: i + 1,
									day: week[(day + i) % 7]
								}}
								disabled={isFuture}>
							</NavButton> */}
                            {makeDay(week[(day + i) % 7], i + 1, isFuture, i+1)}
                        </Pressable>
                    )
                }
            } else {
                date.push(
                    <Pressable style={styles.day} key={`${uuid()}`} />
                )
            }
        }
        return date
    }, [selectedYear, selectedMonth, dataTotalCount])

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
                <View style={{ backgroundColor: 'white', borderBottomLeftRadius: 21, borderBottomRightRadius:21 }}>
                    <View style={{ flexDirection: 'row', alignContent: 'center', borderBottomColor: "#ddd", borderBottomWidth: 1 }}>
                        <FontAwesomIcon name="bell-o" style={{ marginTop: 5 }} color="gray" />
                        <Pressable>
                            <Text>11월 19일 (화)</Text>
                        </Pressable>
                        <View style={{ borderColor: "#ddd", borderWidth: 1.5, flexDirection: 'row', borderRadius: 30 }}>
                            <Text>21:55</Text>
                            <View style={{ backgroundColor: "#ddd", width: 17, height: 17, alignItems: "center", justifyContent: "center", borderRadius: 40 }}>
                                <AntDesignIcon name="plus" color={"green"} />
                            </View>
                        </View>
                    </View>

                    <View>
                    </View>
                    <View style={styles.makeCalendar}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.year}>{selectedYear}년</Text>
                            <Text style={styles.month}>{selectedMonth}월</Text>
                        </View>
                        <Swipe
                            onSwipeLeft={nextMonth}
                            onSwipeRight={prevMonth}
                        >
                            <View style={styles.dayContainer}>
                                {returnDate()}
                            </View>
                        </Swipe>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <FeatherIcon name="repeat" size={13} style={{ marginRight: 10, marginTop: 4, color: "#7D7D7D" }} />
                            <Text>반복 안 함</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <IoniconsIcon name="volume-high-outline" size={19} color="#7D7D7D" />
                            <Text>중간</Text>
                        </View>
                    </View>
                </View> : null}

        </View>)
}

const styles = StyleSheet.create({
    makeCalendar: {
        justifyContent: 'center',
        alignItems: 'center',
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