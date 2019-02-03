import React, { Component } from "react"
import {
	Image,
	Dimensions,
	Alert
} from "react-native"
import { bindActionCreators } from "redux"
import EStyleSheet from "react-native-extended-stylesheet"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"

import { duckOperations } from "src/redux/Onboarding/duck"

import {
	Container,
	View,
	Button,
	Text
} from "native-base"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import styles from "./styles"
import SvgUri from 'react-native-svg-uri'
import ProgressView from 'src/views/components/ProgressView'

const slides = [
	{
		icon: require("src/assets/icons/onboarding_2.svg"),
		title: "Finibus Bonorum Malorum",
		desc: "Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstanc"
	},
	{
		icon: require("src/assets/icons/onboarding_2.svg"),
		title: "Cicero's 1st-century BC",
		desc: "Letraset, a French lettering company, popularized the passage in the 1960s with their dry-transfer sheets."
	},
	{
		icon: require("src/assets/icons/onboarding_2.svg"),
		title: "Aldus Corporation",
		desc: "The program came bundled with Lorem Ipsum dummy text to help with laying out page content, and other word."
	}
]

class Onboarding extends Component {
	constructor(props) {
		super(props)

		this.state = {
			activeSlide: 0,
			title: slides[0].title,
			desc: slides[0].desc
		}
	}

	componentDidMount() {
		// Clear the Facebook session
		// when the login screen is opened.
		this.props.logOutFacebook()
	};

	componentWillReceiveProps(nextProps) {
		// Check if user already specified his interests
		if (this.props.myInterests !== nextProps.myInterests) {
			if (nextProps.myInterests.length > 0) {
				Actions.reset("main")
			} else {
				// Show interests picker
				Actions.reset("interests")
			}
		}

		// Retrieve my interests after succcessful login
		if (this.props.loggedIn !== nextProps.loggedIn) {
			this.props.getMyInterests(nextProps.userId);
		}

		// Display an error popup if needed
		if (this.props.error !== nextProps.error && nextProps.error != null) {
			Alert.alert("Error", nextProps.error)

			// Hide the loading spinner
			this.setState({ loading: false })
		}
	}

	render() {
		return !this.state.loading ?
			<Container style={styles.container}>
				<View style={styles.slideBgWrapper}>
					<View style={{ backgroundColor: "#fafafa", height: 480, width: 480, position: "absolute", borderRadius: 240 }} />
					<View style={{ backgroundColor: "#f6f6f6", height: 340, width: 340, position: "absolute", borderRadius: 170 }} />
					<View style={{ backgroundColor: "#f1f1f1", height: 240, width: 240, position: "absolute", borderRadius: 120 }} />
				</View>

				<View
					style={styles.carousel}>
					<Carousel
						data={slides}
						renderItem={this.renderSlide}
						onSnapToItem={(index) => this.setState({ activeSlide: index })}
						sliderWidth={Dimensions.get('window').width}
						itemWidth={205}
						inactiveSlideScale={0.7}
						inactiveSlideOpacity={1}
						inactiveSlideShift={-70}
						onBeforeSnapToItem={(pos) => this.onBeforeSnapToItem(pos)}
						autoplay={true}
						autoplayDelay={0}
						autoplayInterval={5000}
					/>
				</View>
				<Text style={styles.slideTitle} pointerEvents="none">{this.state.title}</Text>
				<Text style={styles.slideDesc} pointerEvents="none">{this.state.desc}</Text>
				{this.pagination}

				<Button
					title="Facebook"
					style={styles.facebookButton}
					onPress={() => {
						this.setState({ loading: true })
						this.props.authFacebook()
					}}>
					<Text style={styles.facebookText}>Facebook Login</Text>
					<Image style={styles.facebookIcon} source={require('src/assets/icons/back.png')} />
				</Button>
			</Container>
			: <ProgressView />

	}
	
	get pagination() {
		const { activeSlide } = this.state;
		return (
			<Pagination
				dotsLength={slides.length}
				activeDotIndex={activeSlide}
				dotStyle={styles.activeDot}
				inactiveDotStyle={styles.dot}
				inactiveDotOpacity={1}
				inactiveDotScale={1}
			/>
		);
	}

	renderSlide({ item, index }) {
		return <View style={styles.slide} key={item.title}>
			<View style={styles.slideImageWrapper}>
				<SvgUri width={130} height={130} source={item.icon} />
			</View>
		</View>
	}

	onBeforeSnapToItem(pos) {
		this.setState({
			title: slides[pos].title,
			desc: slides[pos].desc
		})
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		loggedIn: state.authReducers.auth.loggedIn,
		userId: state.authReducers.auth.response.uid,
		fullName: state.authReducers.auth.response.displayName,
		error: state.authReducers.auth.error,
		myInterests: state.authReducers.auth.myInterests,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding)
