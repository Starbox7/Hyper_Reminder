import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, TextInput, Text } from 'react-native'
import useStore from '../Zustand/useStore';
import ReminderListItem from './ReminderListItem';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcon from 'react-native-vector-icons/Feather'

const CheckListItem = ({ item }) => {
    const { checkList, updateCheckList } = useStore()

    const updateAddCheckListHandler = (inText) => {
        const index = checkList.findIndex((checkData) => checkData.id === item.id)
        // console.log(index)
        const updateCheckListItem = {
            parentId: item.parentId,
            id: item.id,
            checkMemo: inText,
            do: item.do,
        }
        // console.log(updateCheckListItem)
        const newAddCheckListData = [
            ...(checkList.slice(0, index)),
            updateCheckListItem,
            ...(checkList.slice(index + 1))];

        updateCheckList(newAddCheckListData)
    }

    const updateDeleteCheckListHandler = () => {
        const index = checkList.findIndex((checkData) => checkData.id === item.id)
    
        const newDeleteCheckListData = [
            ...(checkList.slice(0, index)),
            ...(checkList.slice(index + 1))];

        updateCheckList(newDeleteCheckListData)
    }

    const [text, setText] = useState(item.checkMemo)

    // console.log(item.id + "///" + item.checkMemo)
    return (
        <View style={styles.innerCheckList}>
            <MaterialCommunityIconsIcon name="checkbox-blank-outline" size={21} style={{ marginRight: 10 }} />
            <TextInput
                style={{ marginRight: 10, fontSize: 15 }}
                multiline   //multiline={true} 와 동일
                textAlignVertical="top"
                onChangeText={
                    (inText) => {
                        updateAddCheckListHandler(inText)
                        setText(inText)
                        // console.log(text)
                        // console.log(checkList)
                    }
                }
                onKeyPress={({ nativeEvent }) => {
                    if (nativeEvent.key === 'Backspace'&&text=="") {
                        updateDeleteCheckListHandler()
                    }}}
                value={text}
            />
        </View>
    )
}


const CheckList = () => {

    // const [memo, setMemo] = useState('');

    const { checkList } = useStore();
    return (
        checkList.map((item, index) => {
            // console.log(item.checkMemo)
            return (
                <CheckListItem key={item.id} item={item} />
            )
        })
    )
};

const styles = StyleSheet.create({
    innerCheckList: {
        flexDirection: "row",
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 17,
        marginRight: 13
    },
})
export default CheckList;