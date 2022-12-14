import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

export default function Reminder() {

    return(
        <View style={styles.Reminder}>
            <View style={{width:40, alignItems: "flex-end", marginTop:18,}}>
                <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{color: "red"}}/>
            </View>
            <View style={styles.reminderMain}>
                <View style={{marginBottom:7, marginTop: 7,}}>
                    <Text style={{fontWeight: "bold", fontSize: 17,}}>[토이 프로젝트] 모바일 개발 방법론</Text>
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
}

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
  