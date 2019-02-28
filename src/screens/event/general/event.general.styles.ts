import StyleSheet from "react-native-extended-stylesheet";

export const styles = StyleSheet.create({
    general: {
        paddingBottom: 16
    },
    posterImage: {
        width: "100%",
        height: 200
    },
    headingContainer: {
        padding: 16
    },
    headingDate: {
        color: "red",
        marginBottom: 4
    },
    headingTitle: {
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 4
    },
    headingLocation: {
        color: "grey",
        fontSize: 16
    },
    actionsContainer: {
        padding: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    actionItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    actionsBtn: {
        paddingLeft: 20,
        paddingRight: 20,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 4,
        borderRadius: 32
    }
});