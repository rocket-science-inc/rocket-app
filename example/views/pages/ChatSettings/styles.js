import { StyleSheet } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#f9f9f9",
		flex: 1
	},
	profile_wrapper: {
		backgroundColor: "white",
		padding: 24,
		marginBottom: 4
	},
	image: {
		width: 130,
		height: 130,
		borderRadius: 65,
		alignSelf: 'center',
	},
	name: {
		fontSize: 24,
		color: "black",
		alignSelf: 'center',
		marginTop: 16,
		fontFamily: "Lato-Regular"
	},
	username: {
		fontSize: 16,
		color: "#929292",
		alignSelf: 'center',
		marginTop: 4,
		marginBottom: 4,
		fontFamily: "Lato-Regular"
	},
	list_title: {
		alignSelf: "flex-start",
		fontSize: 16,
		color: "black",
		fontFamily: 'Lato-Regular'
	},
	list_title_purple: {
		alignSelf: "flex-start",
		fontSize: 16,
		color: "$primaryColor",
		fontFamily: 'Lato-Regular'
	},
	list_item_narrow: {
		backgroundColor: "white",
		marginLeft: -15,
		paddingLeft: 30,
		paddingTop: 8,
		paddingBottom: 8,
		borderBottomWidth: 0
	},
	list_item: {
		backgroundColor: "white",
		marginLeft: -15,
		paddingLeft: 31,
		paddingTop: 16,
		paddingBottom: 16,
		borderBottomWidth: 0,
		justifyContent: "center"
	},
	list_separator: {
		backgroundColor: "#f9f9f9",
		paddingTop: 8
	},
	list_separator_text: {
		color: "#999"
	},
	list_spacer: {
		height: 44
	},
	divider_wrapper: {
		height: EStyleSheet.hairlineWidth,
		width: "100%",
		backgroundColor: "white"
	},
	divider: {
		height: EStyleSheet.hairlineWidth,
		width: "100%",
		backgroundColor: "#e5e5e5"
	},
}))
