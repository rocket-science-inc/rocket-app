import EStyleSheet from "react-native-extended-stylesheet"
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default EStyleSheet.flatten(EStyleSheet.create({
	header_chat_title: {
		color: "black",
		fontSize: 18,
		marginRight: 4,
		fontFamily: "Lato-Medium",
		fontWeight: "500"
	},
	header_title: {
		color: "black",
		fontSize: 21,
		marginRight: 4,
		fontFamily: "Lato-Medium",
		fontWeight: "500"
	},
	header_title_small: {
		color: "black",
		fontSize: 18,
		marginRight: 2,
		fontFamily: "Lato-Medium",
		fontWeight: "500"
	},
	header_logo: {
		color: "#d60060",
		fontSize: 21,
		fontFamily: "Lato-Medium",
		fontWeight: "500"
	},
	header_left_icon: {
		...ifIphoneX(
			{
				marginTop: 32,
				marginLeft: 14
			},
			{
				marginTop: 0,
				marginLeft: 8
			}
		)
	},
	header_right_icon: {
		...ifIphoneX(
			{
				marginTop: 32,
				marginRight: 4
			},
			{
				marginTop: 0,
				marginRight: 0
			}
		)
	},
	header_back_icon: {
		width: 25,
		height: 25,
		borderRadius: 13
	},
	header_divider: {
		borderBottomWidth: EStyleSheet.hairlineWidth,
		borderBottomColor: "rgba(0, 0, 0, 0.09)"
	},
	header_body: {
		...ifIphoneX(
			{ paddingTop: 30 },
			{ paddingTop: 0 }
		),
		minWidth: 150,
		paddingRight: 3
	},
	logoIcon: {
		width: 34,
		height: 34,
		resizeMode: "contain"
	},
	action: {
		fontSize: 14,
		color: "#D81B60",
		width: 52,
		marginTop: 4,
		marginRight: -1
	}
}))