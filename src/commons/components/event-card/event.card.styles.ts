import StyleSheet from "react-native-extended-stylesheet";

export const styles = StyleSheet.create({
    date: {
        color: "$brandDanger",
        textTransform: "uppercase",
        fontSize: 13
    },
    title: {
        fontWeight: "bold"
    },
    btn: {
        flex: 1
    },
    btnIcon: {
        color: "$brandPrimary",
        fontSize: 16,
        marginLeft: 6
    }
});