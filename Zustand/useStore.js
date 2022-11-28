import uuid from "react-uuid";
import create from "zustand";

const useStore = create((set) => ({
    reminderList: [],
    checkList: [],
    // newReminderId: 0,

    addReminder: (data) => set(( state ) => ({...state, reminderList: data} ) ),

    addCheckList: (checkData) => set((state)=> ({...state, checkList: checkData})),

    initCheckList: () => set((state)=> ({...state, checkList: []})),

    updateCheckList: (newCheckListData) => {
        set((state) => {
            // const index = state.checkList.findIndex((checkData) => checkData.id === id)
            // const updateCheckListItem = {
            //     parentId: state.checkList[index].parentId,
            //     id: state.checkList[index].id,
            //     checkMemo: text,
            //     do: state.checkList[index].do,
            // }
            // console.log(updateCheckListItem.checkMemo)
            // console.log(index)
            return {
                ...state, checkList: newCheckListData
                // ...state.checkList.slice(0, index),
                // updateCheckListItem,
                // ...state.checkList.slice(index + 1)
            }
        })
    },

    // makeReminderId: (makeUuid) => set((state) => ({...state, newReminderId: makeUuid}))
}));

export default useStore;