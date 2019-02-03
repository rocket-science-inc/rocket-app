import EStyleSheet from "react-native-extended-stylesheet"
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#f3f3f3",
		flex: 1
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
		paddingBottom: 16,
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
	button: {
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#929292",
		height: "auto",
		marginTop: 24,
		justifyContent: "center",
		alignSelf: "center",
		paddingHorizontal: 56
	},
	button_text: {
		color: "#999",
		fontSize: 19,
		fontFamily: "Lato-Regular",
		padding: 4,
		marginBottom: 2,
	},
	logoIcon: {
		width: 48,
		height: 48,
		resizeMode: "contain",
		alignSelf: "center",
		marginTop: 22
	},
	version: {
		color: "black",
		fontSize: 16,
		fontFamily: "Lato-Regular",
		alignSelf: "center",
		marginBottom: 24,
		marginTop: 2
	}
}))
