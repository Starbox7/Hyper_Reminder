import React from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ActionButton from 'react-native-action-button';

import Reminder from './component/Reminder';

const App = () => {
  return (
    <SafeAreaView backgroundColor="#F2F2F2" style={{ flex: 1 }} >
      <StatusBar backgroundColor="#61dafb" />



      <ScrollView stickyHeaderIndices={[1]}>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          marginTop: 15,
        }}>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>전체</Text>
        </View>
        <View>
          <View style={styles.MenuBar}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="bars" size={30} style={{ marginRight: 15, marginLeft: 15 }} />
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>전체</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="search" size={30} style={{ marginRight: 25 }} />
              <Icon name="ellipsis-v" size={30} style={{ marginRight: 15 }} />
            </View>
          </View>
        </View>
        <View style={{
          height: 120,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          marginTop: 10,
          marginBottom: 10,
          borderRadius: 10
        }}>
          <Text style={{backgroundColor: '#FFC300'}}>[중앙 메뉴바 구현 계획]</Text>
          <Text>메뉴 분류 : 전체, 지연, 예정, 중요, 완료됨, 휴지통</Text>
          <Text>메뉴 기능 : 설정, 리마인더 카테고리, 소셜연동TODO, Tasks, 카테고리 관리 버튼</Text>
          <Text>검색 : 분류 : 체크리스트, 이미지, 링크 (음성명령지원)</Text>
          <Text>3점메뉴 : 편집 및 정렬 (수행일정순 / 마감기한순)</Text>
        </View>

        <Text style={styles.ReminderCategories}>미뤄둔 일</Text>
        <Reminder />
        <Reminder />

        <Text style={styles.ReminderCategories}>오늘</Text>
        <Reminder />
        <Reminder />

        <Text style={styles.ReminderCategories}>예정</Text>
        <Reminder />
        <Reminder />

        <Text style={styles.ReminderCategories}>알림 없음</Text>
        <Reminder />
        <Reminder />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  MenuBar: {
    height: 70,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "#F2F2F2"
  },
  ReminderCategories: {
    marginLeft: 25,
    color: "#6E6E6E",
    fontWeight: "bold",
    height: 20,
  }

});

export default App;