import EStyleSheet from "react-native-extended-stylesheet"
import { ifIphoneX } from 'react-native-iphone-x-helper'

const PANEL_OFFSET = 155
const IMAGE_SIZE = 130

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		backgroundColor: "#fefefe"
	},
	map: {
		flex: 1,
		marginBottom: -27
	},
	places_container: {
		flexDirection: "column",
		width: "100%",
		padding: 7,
		...ifIphoneX(
			{
				bottom: 16
			},
			{
				bottom: 0
			}
		),
		position: "absolute",
	},
	place_wrapper: {
		flexDirection: "row",
		backgroundColor: "white",
		padding: 14,
		borderRadius: 6
	},
	place_highlight: {
		borderRadius: 6
	},
	place_confirm: {
		flexDirection: "column",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		width: 100,
		paddingTop: 12
	},
	place_confirm_text: {
		color: "white",
		fontFamily: "Lato-Regular",
		fontSize: 12,
		marginTop: 4
	},
	interactable_wrapper: {
		backgroundColor: "$primaryColor",
		shadowOffset: { width: 0, height: 5 },
		shadowColor: 'rgb(188, 188, 188)',
		shadowOpacity: 0.5,
		shadowRadius: 12,
		borderRadius: 7,
		marginTop: 7
	},
	place_text_wrapper: {
		flexDirection: 'column',
		flex: 1
	},
	place_image: {
		width: 68,
		height: 68,
		marginRight: 14,
		borderRadius: 5
	},
	place_title: {
		fontFamily: "Lato-Bold",
		color: "black",
		fontSize: 17,
		marginTop: 8
	},
	place_desc: {
		fontFamily: "Lato-Regular",
		color: "rgb(145, 145, 145)",
		fontSize: 12,
		marginTop: 6
	},
	marker_me: {
		width: 23,
		height: 23,
		resizeMode: "contain"
	},
	marker: {
		width: 28,
		height: 28,
		resizeMode: "contain"
	},
	matched_container: {
		backgroundColor: "$primaryColor",
		borderRadius: 25,
		position: "absolute",
		bottom: 8,
		left: 8,
		right: 8,
		minHeight: 300,
		paddingVertical: 24,
		paddingHorizontal: 48,
		alignItems: "center"
	},
	matched_container_wrapper: {
		left: 0,
		right: 0,
		top: 64,
		bottom: 0,
		position: "absolute"
	},
	matched_wrapper: {
		alignItems: "center"
	},
	matched_title: {
		fontSize: 22,
		lineHeight: 25,
		fontFamily: "Lato-Bold",
		color: "white",
		textAlign: "center",
		marginTop: 16
	},
	matched_desc: {
		fontSize: 14,
		color: "white",
		fontFamily: "Lato-Regular",
		marginTop: 16,
		opacity: 0.7
	},
	interestBg: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		height: "auto",
		borderRadius: 6,
		borderWidth: 1,
		borderColor: "white",
		margin: 4,
		elevation: 0,
		backgroundColor: "$primaryColor"
	},
	interestText: {
		color: "white",
		fontSize: 15,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 2,
		fontFamily: "Lato-Regular",
	},
	interests_wrapper: {
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		marginHorizontal: -24,
		marginTop: 6,
		marginBottom: 20
	},
	learn_more: {
		color: "white",
		fontSize: 12,
		fontFamily: "Lato-Regular",
		marginTop: 2
	},
	spinner: {
		alignSelf: 'center',
		height: "100%"
	},
	panel: {
		backgroundColor: '#f9f9f9'
	},
	panel_container: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	},
	panel_touch_through: {
		...ifIphoneX(
			{ height: 540 },
			{ height: 460 }
		),
	},
	bg_wrapper: {
		position: "absolute",
		top: 0,
		left: -40,
		right: 0,
		height: 260
	},
	bg_image: {
		height: 260,
		resizeMode: "cover",
		opacity: 0.5
	},
	image_wrapper: {
		width: IMAGE_SIZE,
		height: IMAGE_SIZE,
		borderRadius: 115,
		borderWidth: 4,
		marginTop: -IMAGE_SIZE / 2,
		borderColor: "white",
		backgroundColor: "#f0f0f0",
		alignSelf: 'center',
		zIndex: 1
	},
	image: {
		width: 122,
		height: 122,
		borderRadius: 61
	},
	name: {
		fontSize: 24,
		color: "black",
		fontFamily: "Lato-Regular",
		marginTop: 8,
		textAlign: "center"
	},
	bio: {
		fontSize: 16,
		color: "#929292",
		fontFamily: "Lato-Regular",
		marginTop: 8,
		marginBottom: 10,
		textAlign: "center"
	},
	profile_wrapper: {
		marginHorizontal: 8,
		backgroundColor: "white",
		borderRadius: 10,
		marginTop: -PANEL_OFFSET + IMAGE_SIZE / 2,
		shadowColor: "rgb(188, 188, 188)",
		shadowOpacity: 0.5,
		shadowOffset: { height: 2 }
	},
	divider: {
		width: "calc(100% - 16)",
		height: EStyleSheet.hairlineWidth,
		backgroundColor: "rgba(198,198,198,0.45)",
		marginBottom: 2,
		marginLeft: 8,
		marginRight: 8
	},
	estimation_wrapper: {
		flexDirection: "row",
		alignSelf: "center",
		marginBottom: 14,
		marginTop: -2
	},
	estimation: {
		color: "#929292",
		fontSize: 14,
		lineHeight: 13.5,
		fontFamily: "Lato-Regular",
		marginLeft: 6
	},
	details_place_title: {
		fontSize: 19,
		lineHeight: 23,
		marginHorizontal: 20,
		marginTop: 20,
		color: "black",
		fontFamily: "Lato-Bold",
	},
	details_place_desc: {
		fontSize: 15,
		lineHeight: 19,
		marginHorizontal: 20,
		marginTop: 12,
		marginBottom: 14,
		color: "rgb(145,145,145)",
		fontFamily: "Lato-Regular",
	},
	actions_wrapper: {
		flexDirection: "row",
		marginHorizontal: 8,
		marginTop: 12,
		paddingHorizontal: 14,
		paddingVertical: 12,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgb(188, 188, 188)",
		shadowOpacity: 0.5,
		shadowOffset: { height: 2 }
	},
	action_primary: {
		backgroundColor: "$primaryColor",
		marginLeft: 8,
		borderRadius: 7,
		flex: 1,
		justifyContent: "center"
	},
	action_secondary: {
		backgroundColor: "white",
		borderWidth: 2,
		marginRight: 8,
		borderColor: "$primaryColor",
		borderRadius: 7,
		flex: 1,
		justifyContent: "center"
	},
	action_secondary_text: {
		fontSize: 19,
		color: "$primaryColor",
		fontFamily: "Lato-Regular"
	},
	action_primary_text: {
		fontSize: 19,
		color: "white",
		fontFamily: "Lato-Regular"
	},
	slide_image_wrapper: {
		margin: 6
	},
	slide_image: {
		flex: 1,
		height: 161,
		resizeMode: "cover",
		borderRadius: 7,
		backgroundColor: "#e5e5e5"
	},
	active_dot: {
		width: 7,
		height: 7,
		borderRadius: 3.5,
		marginHorizontal: -8,
		backgroundColor: '$primaryColor'
	},
	dot: {
		backgroundColor: '#c6c6c6'
	},
	contacts_wrapper: {
		marginHorizontal: 8,
		paddingHorizontal: 20,
		paddingVertical: 16,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "rgb(188, 188, 188)",
		shadowOpacity: 0.5,
		shadowOffset: { height: 2 }
	},
	contacts_title: {
		fontSize: 16,
		color: "black",
		fontFamily: "Lato-Bold"
	},
	phone_wrapper: {
		flexDirection: "row",
		marginTop: 16
	},
	website_wrapper: {
		flexDirection: "row",
		marginTop: 8
	},
	contacts_label: {
		fontSize: 16,
		color: "black",
		fontFamily: "Lato-Regular",
		flex: 1,
		alignSelf: "center"
	},
	phone_icon: {
		marginLeft: -3,
		marginRight: 12,
		alignSelf: "center"
	},
	website_icon: {
		marginLeft: -2,
		marginRight: 12,
		alignSelf: "center"
	},
	contacts_button: {
		backgroundColor: "white",
		borderWidth: 1,
		height: 24,
		width: 94,
		paddingTop: 0,
		paddingBottom: 0,
		borderColor: "$primaryColor",
		borderRadius: 7,
		justifyContent: "center"
	},
	contacts_button_text: {
		fontSize: 13,
		paddingLeft: 0,
		paddingRight: 0,
		color: "$primaryColor",
		fontFamily: "Lato-Regular"
	},
	details_wrapper: {
		marginHorizontal: 8,
		paddingHorizontal: 20,
		paddingVertical: 16,
		marginTop: 16,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#929292",
		shadowOpacity: 0.5,
		shadowOffset: { height: 2 }
	},
	location_text: {
		fontSize: 14,
		color: "#929292",
		fontFamily: "Lato-Regular",
		marginTop: 16
	},
	timings_wrapper: {
		flexDirection: "row",
		flex: 1
	},
	timings_header: {
		fontSize: 14,
		color: "#929292",
		marginTop: 16,
		fontFamily: "Lato-Regular"
	},
	timings_column: {
		flex: 1
	},
	timings_text: {
		fontSize: 14,
		color: "black",
		marginTop: 6,
		marginBottom: 2,
		fontFamily: "Lato-Regular"
	},
	cancel_chat_button: {
		backgroundColor: "transparent",
		borderWidth: 2,
		marginRight: 8,
		borderColor: "#929292",
		borderRadius: 7,
		flex: 1,
		justifyContent: "center",
		alignSelf: "center",
		marginTop: 20,
		marginBottom: 36
	},
	cancel_chat_button_text: {
		fontSize: 19,
		paddingLeft: 64,
		paddingRight: 64,
		marginBottom: 1,
		color: "#929292",
		fontFamily: "Lato-Regular"
	},
	down_arrow: {
		position: "absolute",
		left: 54,
		top: 22
	},
	matched_layouts_wrapper: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
}))