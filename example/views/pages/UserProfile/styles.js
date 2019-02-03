import GlobalStyles from "src/views/common/GlobalStyles"
import { ifIphoneX } from 'react-native-iphone-x-helper'

import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#f9f9f9",
		flex: 1
	},
	body: {
		flex: 1,
		paddingBottom: 24
	},
	wrapper: {
		marginTop: 150,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 14,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: "white",
		borderRadius: 7,
		alignItems: 'center',
		shadowOffset: { height: 2 },
		shadowRadius: 10,
		shadowColor: 'rgba(0,0,0,0.07)',
		shadowOpacity: 1.0
	},
	block: {
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 14,
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "white",
		borderRadius: 7,
		shadowOffset: { height: 2 },
		shadowRadius: 10,
		shadowColor: 'rgba(0,0,0,0.07)',
		shadowOpacity: 1.0
	},
	image_wrapper: {
		width: 210,
		height: 210,
		borderRadius: 105,
		borderWidth: 5,
		borderColor: "white",
		marginTop: -140
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 100,
		backgroundColor: "#f0f0f0"
	},
	name: {
		fontSize: 24,
		color: "black",
		fontFamily: "Lato-Regular",
		marginTop: 12
	},
	bio: {
		fontSize: 15.5,
		color: "#929292",
		fontFamily: "Lato-Regular",
		marginTop: 8,
		marginBottom: 16,
		textAlign: "center"
	},
	bg_gradient: {
		position: "absolute",
		width: "100%"
	},
	bg_image: {
		height: 220,
		opacity: 0.5,
		marginLeft: -40
	},
	info_wrapper: {
		flexDirection: "row",
		marginVertical: 8
	},
	info_text: {
		fontFamily: "Lato-Regular",
		color: "black",
		fontSize: 16,
		flex: 1,
		alignSelf: 'center'
	},
	info_icon: {
		marginTop: 3,
		marginRight: 16
	},
	interestsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 1,
		paddingVertical: 8
	},
	interestBg: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		height: "auto",
		borderWidth: 1,
		borderColor: "#c6c6c6",
		borderRadius: 6,
		margin: 4,
		elevation: 0,
		backgroundColor: "#fefefe"
	},
	interestText: {
		color: "$primaryColor",
		fontSize: 14,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 2,
		fontFamily: "Lato-Regular",
	},
}))
