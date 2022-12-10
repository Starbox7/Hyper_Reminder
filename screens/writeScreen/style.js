import { StyleSheet, Dimensions } from "react-native";


const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const vw = (w) => Math.floor(chartWidth / 100 * w)
const vh = (h) => Math.floor(chartHeight / 100 * h)

const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        flex: 1,
        backgroundColor: "#F4F3EF"
    },

    reminderMain: {
        backgroundColor: "#ffffff",
        borderBottomRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
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
        marginTop: 70,
        marginLeft: 10,
        marginBottom: 5,
        color: "#263238",
        fontSize: 22,
        marginRight: 10,
    },
    bodyInput: {
        marginLeft: 10,
        fontSize: 19,
        paddingVertical: 0,
        marginBottom: 15,
        fontWeight: '100',
    },

    bottomHeader: {
        height: 57,
        paddingHorizontal: 8,
        flexDirection: 'row',
        backgroundColor: "#F4F3EF",
    },
    iconButtonWrapper: {
        width: 32,
        height: 32,
        borderRadius: 16,
        overflow: 'hidden',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    marginRight: {
        marginRight: 8,
    },
    headerText1: {
        fontWeight: "bold",
        fontSize: 17,
    },
    headerText2: {
        fontWeight: "bold",
        fontSize: 17,
        color: '#A2A2A2',

    },
    headerText3: {
        fontWeight: "bold",
        fontSize: 17,
        color: 'black',

    },
    //ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    makeCalendar: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    year: {
        fontSize: 20,
        color: 'black',
    },
    month: {
        fontSize: 30,
        color: 'black',
        marginBottom: vh(5),
    },
    dayContainer: {
        width: vw(91),
        height: vw(13 * 6),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // flex-flow: wrap,
        flexWrap: 'wrap',
    },
    selectedDayTextView: {
        width: vw(13),
        height: vw(13),
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedDayText: {
        width: vw(7),
        height: vw(7),
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        borderRadius: 40,
        backgroundColor: '#007FFF'
    },
    dayText: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ddd',
        textAlignVertical: 'center',
    },
    dayTextBlack: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        textAlignVertical: 'center',
    },
    dayTextBlue: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'blue',
        textAlignVertical: 'center',
    },
    dayTextRed: {
        width: vw(13),
        height: vw(13),
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
        textAlignVertical: 'center',
    },
    day: {
        width: vw(13),
        height: vw(13),
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    calendar: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    reminderDeadlineFalse: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    reminderDeadlineTrue: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        padding: 10,
        color: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});

export default styles;