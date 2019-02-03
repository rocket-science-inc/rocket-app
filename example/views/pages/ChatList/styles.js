import { StyleSheet } from "react-native"
import GlobalStyles from "src/views/common/GlobalStyles"

export default StyleSheet.create({
	container: {
		backgroundColor: "#fefefe"
	},
	search_bar_wrapper: {
		padding: 10,
		marginLeft: -1,
		borderBottomWidth: 0
	},
	search_bar: {
		paddingLeft: 12,
		flex: 1,
		justifyContent: "center",
		borderRadius: 8,
		backgroundColor: "#f1f1f3",
		paddingRight: 12,
		borderBottomWidth: 0
	},
	search_input: {
		paddingLeft: 0,
		paddingTop: 0,
		paddingRight: 0,
		flex: 1,
		paddingBottom: 2,
		borderWidth: 0,
		fontSize: 14,
		height: 36,
		alignSelf: 'center',
		fontFamily: "Lato-Regular",
	},
	search_icon: {
		fontSize: 18,
		marginTop: 3,
		marginRight: 2,
		color: GlobalStyles.$inputPlaceholderColor
	},
	list_item_wrapper: {
		flexDirection: "row"
	},
	list_image: {
		width: 56,
		height: 56,
		borderRadius: 28,
		marginLeft: 16,
		marginRight: 16,
		marginTop: 8
	},
	list_item: {
		flexDirection: "row",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flex: 1,
		alignSelf: "center",
		borderBottomColor: "#f2f0f0"
	},
	list_content: {
		flex: 1,
	},
	list_title: {
		marginTop: 14,
		color: "#303030",
		marginBottom: 8,
		fontSize: 16,
		fontFamily: "Lato-Regular",
	},
	list_message: {
		marginBottom: 16,
		color: "#929292",
		fontSize: 15,
		fontFamily: "Lato-Regular",
	},
	list_details: {
		flexDirection: "column",
		alignItems: "flex-end",
		marginRight: 16,
	},
	list_time: {
		color: "#929292",
		fontSize: 14,
		marginTop: 16,
		fontFamily: "Lato-Light",
	},
	list_badge: {
		minWidth: 20,
		height: 20,
		paddingLeft: 5,
		paddingRight: 5,
		marginTop: 8,
		backgroundColor: GlobalStyles.$primaryColor,
		borderRadius: 12,
		justifyContent: "center"
	},
	list_badge_text: {
		fontSize: 12,
		textAlign: "center",
		color: "white",
		fontFamily: "Lato-Regular",
		marginBottom: 0.5,
		marginRight: 0.5
	}
})
