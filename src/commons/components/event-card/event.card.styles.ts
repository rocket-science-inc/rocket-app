import StyleSheet from "react-native-extended-stylesheet";

export const styles = StyleSheet.create({
    date: {
        color: "$brandDanger",
        textTransform: "uppercase"
    },
    title: {
        fontWeight: "bold"
    },
    content: {
        display: "flex",
        flexDirection: "row",
        alignContent: "flex-start"
    },
    actions: {
        display: "flex",
        flexDirection: "row"
    },
    btn: {
        marginLeft: 8
    }
});