import { StyleSheet } from "react-native";



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
    reminderDeadline: {
        backgroundColor: "#ffffff",
        borderRadius: 21,
        padding: 10,
        color: "white",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
});

export default styles;