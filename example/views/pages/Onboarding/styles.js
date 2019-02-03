import EStyleSheet from "react-native-extended-stylesheet"
import { ifIphoneX } from 'react-native-iphone-x-helper'

export default EStyleSheet.flatten(EStyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fefefe"
	},
	facebookButton: {
		width: "80%",
		height: 55,
		marginTop: 32,
		justifyContent: "center",
		alignSelf: "center",
		backgroundColor: "$primaryColor",
		borderRadius: 7
	},
	facebookText: {
		color: "$textPrimaryColor",
		flex: 1,
		fontFamily: "Lato-Regular",
		fontSize: 22,
		paddingBottom: 3,
		textAlign: "center"
	},
	activeDot: {
		width: 10,
		height: 10,
		borderRadius: 5,
		marginHorizontal: 2,
		backgroundColor: '$primaryColor'
	},
	dot: {
		backgroundColor: '#c6c6c6'
	},
	facebookIcon: {
		width: 20,
		height: 20,
		tintColor: "white",
		position: "absolute",
		right: 32,
		transform: [{ rotate: '180deg' }]
	},
	carousel: {
		height: "100%",
		width: "100%",
		position: "absolute",
		...ifIphoneX({ top: 100 }, {})
	},
	slide: {
		height: "100%",
		width: "100%",
		marginBottom: 60,
		paddingTop: 24
	},
	slideImageWrapper: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 60
	},
	slideBgWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		height: 300,
		width: 300,
		position: "absolute",
		...ifIphoneX({ top: 100 }, {})
	},
	slideTitle: {
		textAlign: "center",
		fontFamily: "Lato-Bold",
		fontSize: 24,
		paddingLeft: 24,
		paddingRight: 24,
		marginBottom: 36,
		...ifIphoneX(
			{ marginTop: 392 },
			{ marginTop: 292 }
		),
		color: "#000000"
	},
	slideDesc: {
		textAlign: "center",
		fontFamily: "Lato-Regular",
		fontSize: 18,
		lineHeight: 24,
		paddingBottom: 16,
		paddingLeft: 24,
		paddingRight: 24,
		color: "#929292"
	}
}))
