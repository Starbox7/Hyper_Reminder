import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Text, Switch, KeyboardAvoidingView, Pressable } from 'react-native';

import uuid from "react-uuid";
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from "./style";
import useStore from "../../Zustand/useStore";
import Deadline from "../../components/Deadline";
import CheckList from "../../components/CheckList";


function WriteScreen() {
    

    //네비게이션 영역
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('MainTab');
    };

    //상태 관리 영역
    const [title, setTitle] = useState('');
    const [memo, setMemo] = useState('');
    // const [check, setCheck] = useState('');


    const [makeReminderId, setMakeReminderId] = useState(uuid());



    //useStore 동작 영역
    const { reminderList, addReminder, checkList, addCheckList, newRemiderId, initCheckList } = useStore();
    //저장 버튼을 누르면 리마인더 리스트를 업데이트 한다.
    const addReminderHandler = () => {
        if (title != "") {
            const newReminder = {
                id: makeReminderId,
                title: title,
                memo: memo,
                checkList: checkList,
            };
            const data = [...reminderList, newReminder];
            addReminder(data);
            initCheckList();
            onPress();
        }
        // console.log(reminderList[0].id)
    }
    const addCancelReminderHandler = () => {
        initCheckList();
        onPress();
    }
    const addCheckHandler = () => {
        const newCheck = {
            parentId: makeReminderId,
            id: uuid(),
            checkMemo: "",
            do: false,
        };
        // console.log(newCheck.checkMemo)
        const checkData = [...checkList, newCheck];
        addCheckList(checkData);
    }
    return (
        <KeyboardAvoidingView
            style={styles.KeyboardAvoidingView}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={{ flex: 1 }}>
                <View style={styles.reminderMain}>
                    <View>
                        <TextInput
                            placeholder="리마인더 제목"
                            style={styles.titleInput}
                            returnKeyType="next"
                            onChangeText={(title) => setTitle(title)}
                            value={title}
                            multiline={true}
                        />
                        <TextInput
                            placeholder="메모"
                            placeholderTextColor={"#BFBFBF"}
                            style={styles.bodyInput}
                            multiline //multiline={true} 와 동일
                            textAlignVertical="top"
                            onChangeText={(memo) => setMemo(memo)}
                            value={memo}
                        />
                    </View>
                    <CheckList />
                    {/* 체크박스를 추가하는 버튼 */}
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginBottom: 17, marginRight: 7 }}>
                        <Pressable
                            style={({ pressed }) => [
                                Platform.OS === 'ios' && {
                                    opacity: pressed ? 0.6 : 1,
                                },
                            ]}
                            android_ripple={{ color: 'white' }}
                            onPress={addCheckHandler}>
                            <IoniconsIcon name="checkbox-outline" size={19} color="#7D7D7D" />
                        </Pressable>
                    </View>
                </View>
                <Deadline />
                <View style={styles.reminderTime}>
                    <Text style={{ marginLeft: 5, fontSize: 17, }}>진행 날짜</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={"#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
                <View style={styles.reminderLocation}>
                    <Text style={{ marginLeft: 5, fontSize: 17, }}>진행 장소</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={"#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
                <View style={styles.reminderCategory}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesomIcon name="circle" style={{ marginLeft: 20, marginTop: 5 }} color="#ddd" />
                        <Text style={{ marginLeft: 25, fontSize: 17, }}>Tasks</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={"#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                    />
                </View>
                <View style={{ marginLeft: 20, flexDirection: "row" }}>
                    <FontAwesomIcon name="bell-slash-o" style={{ marginTop: 5 }} color="gray" />
                    <Text style={{ marginLeft: 10, color: "gray" }}>알림을 받지 않습니다.</Text>
                </View>
            </View>
            <View style={styles.bottomHeader}>

                <Pressable
                    style={({ pressed }) => [
                        styles.buttons,
                        Platform.OS === 'ios' && {
                            opacity: pressed ? 0.6 : 1,
                        }, { flex: 1, justifyContent: 'center' }
                    ]}
                    android_ripple={{ color: 'white' }}
                    onPress={addCancelReminderHandler}>
                    <Text style={styles.headerText1}>취소</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [
                        styles.buttons,
                        Platform.OS === 'ios' && {
                            opacity: pressed ? 0.6 : 1,
                        }, { flex: 1, justifyContent: 'center' }
                    ]}
                    android_ripple={{ color: 'white' }}
                    onPress={addReminderHandler}>
                    {(title == "") ? <Text style={styles.headerText2}>저장</Text> : <Text style={styles.headerText3}>저장</Text>}
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

export default WriteScreen;