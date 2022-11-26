// {reminderList.checkList.map((item, index) => {
//     return(
//         <View key={reminderList.checkList.id} style={{ flexDirection: "row", marginLeft: 7, marginRight: 13 }}>
//     <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={13} style={{ marginRight: 10, marginTop: 4 }} />
//     <Text>공백</Text>
// </View>
//     )
// })}

// import React from 'react'
// import { StyleSheet, ScrollView, View, TextInput } from 'react-native'
// import useStore from '../Zustand/useStore';
// import ReminderListItem from './ReminderListItem';
// import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
// import FeatherIcon from 'react-native-vector-icons/Feather'



// const CheckList = () => {
//     const { reminderList } = useStore();
//     return (
//         reminderList.checkList.map((item, index) => {
//             return (
//                 <View key={item.id} style={styles.innerCheckList}>
//                         <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{ marginRight: 10 }} />
//                         <TextInput
//                             style={{ marginRight: 10, }}
//                             multiline   //multiline={true} 와 동일
//                             textAlignVertical="top"
//                             onChangeText={""}
//                             value={""}
//                         />
//                     </View>
//             )
//         })
//     )
// };

// const styles = StyleSheet.create({
//     innerCheckList: {
//         flexDirection: "row", 
//         marginTop: 2, 
//         marginBottom: 2, 
//         marginLeft: 17, 
//         marginRight: 13 
//     },
// })
// export default CheckList;