import EStyleSheet from "react-native-extended-stylesheet"

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fefefe",
		padding: 20
	},
	logo: {
		alignSelf: "center",
		marginTop: 28,
		height: 48,
		width: 48,
		resizeMode: "contain"
	},
	title: {
		color: "black",
		fontSize: 26,
		fontFamily: "Lato-Bold",
		marginTop: 24,
		marginHorizontal: 4
	},
	desc: {
		color: "#929292",
		fontSize: 18,
		fontFamily: "Lato-Regular",
		marginTop: 16,
		marginHorizontal: 4
	},
	interestsWrapper: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 36,
		flex: 1
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
	interestBgSelected: {
		paddingVertical: 6,
		paddingHorizontal: 10,
		height: "auto",
		borderWidth: 1,
		borderColor: "$primaryColor",
		borderRadius: 6,
		margin: 4,
		elevation: 0,
		backgroundColor: "$primaryColor"
	},
	interestText: {
		color: "$primaryColor",
		fontSize: 15,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 2,
		fontFamily: "Lato-Regular",
	},
	interestTextSelected: {
		color: "white",
		fontSize: 15,
		paddingLeft: 0,
		paddingRight: 0,
		marginBottom: 2,
		fontFamily: "Lato-Regular",
	},
	buttonWrapper: {
		padding: 4
	},
	button: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		height: "auto",
		backgroundColor: "$primaryColor"
	},
	buttonDisabled: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		height: "auto",
		backgroundColor: "#c6c6c6"
	},
	buttonText: {
		fontSize: 21,
		fontFamily: "Lato-Regular",
		color: "white",
		padding: 8,
		marginBottom: 2
	},
	buttonIcon: {
		width: 20,
		height: 20,
		tintColor: "white",
		position: "absolute",
		right: 32,
		transform: [{ rotate: '180deg' }]
	},
}))
