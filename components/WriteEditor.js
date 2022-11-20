import React from "react";
import { View, StyleSheet, TextInput, Text, Switch } from 'react-native';
// import  Icon  from "react-native-vector-icons/MaterialIcons";
// import { Icon } from "react-native-vector-icons/Icon";
import FontAwesomIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import Icon from "react-native-vector-icons/Ionicons"
// import Icon from "react-native-vector-icons"

function WriteEditor({ title, body, check, onChangeTitle, onChangeBody, onChangeCheck }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.reminderMain}>
                <View>
                    <TextInput
                        placeholder="리마인더 제목"
                        style={styles.titleInput}
                        returnKeyType="next"
                        onChangeText={onChangeTitle}
                        value={title}
                        multiline={true}
                    />
                    <TextInput
                        placeholder="메모"
                        placeholderTextColor={"#BFBFBF"}
                        style={styles.bodyInput}
                        multiline   //multiline={true} 와 동일
                        textAlignVertical="top"
                        onChangeText={onChangeBody}
                        value={body}
                    />
                </View>
                <View style={{flexDirection: "row", marginTop: 20, marginBottom: 10, marginLeft: 13, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{marginRight:10}}/>
                    <TextInput
                        style={{marginRight: 10,}}
                        multiline   //multiline={true} 와 동일
                        textAlignVertical="top"
                        onChangeText={onChangeCheck}
                        value={check}
                    />
                </View>
                <View style={{flexDirection: "row", justifyContent: "flex-end", marginBottom: 17, marginRight:7}}>
                    <IoniconsIcon name="checkbox-outline" size={19} color="#7D7D7D"/>
                </View>
            </View>
            <View style={styles.reminderDeadline}>
                <Text style={{ marginLeft: 5, fontSize: 17, }}>마감 날짜</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
            <View style={styles.reminderTime}>
                <Text style={{ marginLeft: 5, fontSize: 17, }}>진행 날짜</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
            <View style={styles.reminderLocation}>
                <Text style={{ marginLeft: 5, fontSize: 17, }}>진행 장소</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
            <View style={styles.reminderCategory}>
                <View style={{ flexDirection: "row" }}>
                    <FontAwesomIcon name="circle" style={{ marginLeft: 20, marginTop: 5 }} color="#ddd" />
                    <Text style={{ marginLeft: 25, fontSize: 17, }}>Tasks</Text>
                </View>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    thumbColor={"#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
            <View style={{ marginLeft: 20, flexDirection: "row" }}>
                {/* <Icon></Icon> */}
                <FontAwesomIcon name="bell-slash-o" style={{ marginTop: 5 }} color="gray" />
                <Text style={{ marginLeft: 10, color: "gray" }}>알림을 받지 않습니다.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    reminderMain: {
        backgroundColor: "#ffffff",
        borderBottomRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
    },
    reminderDeadline: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reminderTime: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reminderLocation: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reminderCategory: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    titleInput: {
        paddingVertical: 0,
        fontSize: 18,
        marginTop: 30,
        marginLeft: 10,
        marginBottom: 5,
        color: "#263238",
        fontWeight: "bold",
        fontSize: 22,
        marginRight:10,
    },
    bodyInput: {
        marginLeft: 10,
        fontSize: 19,
        paddingVertical: 0,
        fontWeight: "bold",
    },
});

export default WriteEditor;