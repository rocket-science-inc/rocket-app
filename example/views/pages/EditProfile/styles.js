import {
	StyleSheet,
	Dimensions
} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#f3f3f3",
		flex: 1
	},
	grid_wrapper: {
		height: Dimensions.get("window").width,
		padding: 16,
		marginBottom: -16
	},
	photo: {
		flex: 1,
		margin: 8,
		borderRadius: 15
	},
	photo_empty: {
		flex: 1,
		margin: 8,
		borderRadius: 15,
		borderWidth: 1,
		borderColor: "#c6c6c6",
		alignItems: "center",
		justifyContent: "center"
	},
	photo_add: {
		height: 56,
		width: 56,
		fontSize: 56,
		textAlign: "center",
		color: "#c6c6c6"
	},
	multi_line_wrapper: {
		flexDirection: "column"
	},
	list_title: {
		alignSelf: "flex-start",
		fontSize: 16,
		color: "black",
		fontFamily: 'Lato-Regular'
	},
	list_desc: {
		alignSelf: "flex-start",
		fontSize: 13,
		color: "#ccc",
		fontFamily: 'Lato-Regular',
		marginTop: 4
	},
	list_item: {
		backgroundColor: "white",
		marginLeft: -15,
		paddingLeft: 30,
		borderBottomWidth: 0
	},
	list_separator: {
		backgroundColor: "#f3f3f3",
		paddingTop: 8
	},
	list_separator_text: {
		color: "#999"
	},
	info: {
		fontSize: 12,
		lineHeight: 15,
		color: "#d3d3d3",
		fontFamily: 'Lato-Regular',
		paddingLeft: 16,
		paddingRight: 88,
		paddingBottom: 32,
		paddingTop: 8
	},
	divider_wrapper: {
		height: EStyleSheet.hairlineWidth,
		width: "100%",
		backgroundColor: "white"
	},
	divider: {
		height: EStyleSheet.hairlineWidth,
		width: "100%",
		backgroundColor: "#e5e5e5",
		marginLeft: 16
	},
	username_wrapper: {
		flexDirection: "row",
		alignItems: 'center',
		flex: 1,
		right: 16,
		position: "absolute"
	},
	username: {
		fontSize: 16,
		color: "#929292",
		fontFamily: 'Lato-Regular',
		marginRight: 12,
		marginBottom: 2,
		alignSelf: 'center'
	},
	edit: {
		position: "absolute",
		right: 12,
		bottom: 12,
		height: 20,
		width: 20
	}
}))