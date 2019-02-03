import { StyleSheet } from "react-native"
import GlobalStyles from "src/views/common/GlobalStyles"
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
	container: {
		backgroundColor: "#f9f9f9",
		flex: 1
	},
	body: {
		flex: 1
	},
	wrapper: {
		marginTop: 150,
		marginLeft: 10,
		marginRight: 10,
		...ifIphoneX(
			{
				marginBottom: 36
			},
			{
				marginBottom: 14
			}
		),
		padding: 16,
		backgroundColor: "white",
		borderRadius: 7,
		alignItems: 'center',
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
		fontSize: 16,
		color: "#929292",
		fontFamily: "Lato-Regular",
		marginTop: 8,
		marginBottom: 16,
		textAlign: "center"
	},
	bg_gradient: {
		position: "absolute",
		width: "100%",
	},
	bg_image: {
		height: 220,
		opacity: 0.5,
		marginLeft: -40
	},
	buttons_wrapper: {
		flex: 1,
		padding: 10
	},
	button: {
		width: "100%",
		backgroundColor: "transparent",
		borderWidth: 1,
		borderColor: "#c6c6c6",
		height: "auto",
		marginTop: 10,
		justifyContent: "center"
	},
	button_text: {
		color: "black",
		fontSize: 22,
		fontFamily: "Lato-Regular",
		padding: 8,
		marginBottom: 2,
	}
})
