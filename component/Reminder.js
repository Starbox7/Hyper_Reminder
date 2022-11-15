import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Reminder() {

    return(
        <View style={styles.Reminder}>
            <Text style={{backgroundColor: '#DAF7A6'}}>[리마인더 객체 구현 계획]</Text>
            <Text>리마인더 컴포넌트 구현 위치</Text>
            <Text>체크박스 : 색 변경 가능</Text>
            <Text>리마인더 제목 : 굵게, 관련 할일 목록 : 체크박스, 마감일자, 수행일자</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Reminder: {
      height: 120,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      marginTop: 10,
      marginBottom: 10,
      borderRadius:10
    },
  
  });
  