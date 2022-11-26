import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

const { width, height } = Dimensions.get("window");

const ReminderListItem = ({titleValue, id, checked}) => {
    return (
        <View style={styles.Reminder}>
            <View style={{width:40, alignItems: "flex-end", marginTop:18,}}>
                <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{color: "red"}}/>
            </View>
            <View style={styles.reminderMain}>
                <View style={{marginBottom:7, marginTop: 7,}}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>{titleValue}</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text>useState를 사용하기</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text>Drawer Navigation 사용하기</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text>await를 사용하기</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text></Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text></Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{marginRight:10, marginTop:4}}/>
                    <Text>할일 체크 목록 6개 초과시 ... 으로 표시</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <Text>...</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <Text style={{color: "#EF7C47", fontWeight: "bold",}}>오늘, 08:30</Text>
                </View>
                <View style={{flexDirection: "row", marginLeft: 7, marginRight: 13}}>
                    <FeatherIcon name="repeat" size={13} style={{marginRight:10, marginTop:4, color: "#7D7D7D"}}/>
                    <Text style={{color: "#7D7D7D"}}>매주 (월, 화, 수, 목, 금)</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Reminder: {
      backgroundColor: '#FFFFFF',
      marginTop: 10,
      marginBottom: 10,
      borderRadius:10,
      flexDirection: "row",
    },
    reminderMain: {
        borderBottomRadius: 21,
        padding: 10,
        color: "white",
    },
  
  });
  

// const styles = StyleSheet.create({
//     container: {
//         width: width - 70,
//         flex: 1,
//         borderBottomColor: '#bbb',
//         borderBottomWidth: StyleSheet.hairlineWidth,
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//     },
//     text: {
//         flex: 5,
//         fontWeight: '500',
//         fontSize: 18,
//         marginVertical: 20,
//         width: 100,
//     },
//     circle: {
//         width: 30,
//         height: 30,
//         borderRadius: 15,
//         borderColor: '#3867d6',
//         borderWidth: 2,
//         marginRight: 20,
//         marginLeft: 20,
//     },
//     completeCircle: {
//         marginRight: 20,
//         marginLeft: 20,
//     },
//     strikeText: {
//         color: '#bbb',
//         textDecorationLine: 'line-through',
//     },
//     unstrikeText: {
//         color: '#29323c',
//     },
//     buttonContainer: {
//         marginVertical: 10,
//         marginHorizontal: 10,
//     },
// });

export default ReminderListItem;