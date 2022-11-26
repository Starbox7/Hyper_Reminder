import uuid from "react-uuid";
import create from "zustand";

const useStore = create((set) => ({
    reminderList: [],
    checkList: [],
    // newReminderId: 0,

    addReminder: (data) => set(( state ) => ({...state, reminderList: data} ) ),

    addCheckList: (checkData) => set((state)=> ({...state, checkList: checkData})),

    initCheckList: () => set((state)=> ({...state, checkList: []})),

    // makeReminderId: (makeUuid) => set((state) => ({...state, newReminderId: makeUuid}))
}));

export default useStore;