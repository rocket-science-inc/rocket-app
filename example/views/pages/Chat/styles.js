import { StyleSheet } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#fefefe",
		flex: 1
	},
	list_item_wrapper: {
		flexDirection: "row",
		paddingTop: 2,
		paddingBottom: 12,
		paddingLeft: 12,
		paddingRight: 12
	},
	list_item_wrapper_my: {
		flexDirection: "row",
		paddingTop: 4,
		paddingBottom: 12,
		paddingLeft: 12,
		paddingRight: 12,
		alignSelf: "flex-end"
	},
	list_item: {
		paddingRight: 42,
		flex: 1
	},
	list_item_my: {
		paddingLeft: 42,
		flex: 1
	},
	list_image: {
		width: 40,
		height: 40,
		marginRight: 8,
		borderRadius: 20,
		marginBottom: 22,
		alignSelf: "flex-end"
	},
	list_time: {
		color: "#c6c6c6",
		fontSize: 13,
		marginTop: 6,
		fontFamily: "Lato-Regular",
	},
	list_time_my: {
		color: "#c6c6c6",
		fontSize: 13,
		marginTop: 6,
		fontFamily: "Lato-Regular",
		alignSelf: "flex-end"
	},
	list_title: {
		color: "black",
		fontSize: 16,
		fontFamily: "Lato-Regular",
	},
	list_bubble: {
		backgroundColor: "#f4f4f4",
		borderBottomRightRadius: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 14,
		paddingBottom: 14
	},
	list_bubble_my: {
		borderBottomLeftRadius: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 14,
		paddingBottom: 14,
		overflow: "hidden",
		alignSelf: "flex-end"
	},
	list_message_my: {
		color: "white",
		fontSize: 15,
		fontFamily: "Lato-Regular",
	},
	input: {
		fontSize: 17,
		height: 56,
		paddingLeft: 16,
		paddingRight: 16,
		fontFamily: "Lato-Regular",
	},
	button: {
		height: 56,
		paddingLeft: 16,
		paddingRight: 16,
	},
	button_text: {
		fontSize: 17,
		color: "#929292",
		fontFamily: "Lato-Regular",
	},
	footer: {
		backgroundColor: "white",
		borderTopColor: "#d6d6d6"
	}
}))
