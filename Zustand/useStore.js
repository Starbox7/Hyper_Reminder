import uuid from "react-uuid";
import create from "zustand";

const useStore = create((set) => ({
    reminderList: [],
    checkList: [],
    // selectedDate: 0,
    nowSort: true,

    updateNowSort: () => set((state) => ({...state, nowSort: !state.nowSort})),
    // selectedDate: new Date().getDate(),
    // checkDate: 0,
    // newReminderId: 0,

    // updateSelectedDate: (dateData) => set((state) => ({...state, selectedDate: dateData})),

    // updateCheckDate: (dateData) => set((state) => ({...state, checkDate: dateData})),

    // updateDateResult: (dateData) => set((state) => ({...state, selectedDate: dateData})),

    addReminder: (data) => set(( state ) => ({...state, reminderList: data} ) ),

    sortReminder: () => set((state) => ({...state, reminderList: (state.nowSort==true)?
        [...state.reminderList].sort((a,b) => a.deadLine-b.deadLine):[...state.reminderList].sort((a,b) => a.date-b.date)})),

    addCheckList: (checkData) => set((state)=> ({...state, checkList: checkData})),

    initCheckList: () => set((state)=> ({...state, checkList: []})),

    updateCheckList: (newCheckListData) => {
        set((state) => {
            return {
                ...state, checkList: newCheckListData
            }
        })
    },

    // makeReminderId: (makeUuid) => set((state) => ({...state, newReminderId: makeUuid}))
}));

export default useStore;