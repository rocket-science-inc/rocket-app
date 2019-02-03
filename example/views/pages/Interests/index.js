import React, { Component } from "react"
import {
	Image
} from "react-native"
import { bindActionCreators } from "redux"
import EStyleSheet from "react-native-extended-stylesheet"
import { connect } from "react-redux"
import { Actions } from "react-native-router-flux"

import { duckOperations } from "src/redux/Interests/duck"

import {
	Container,
	Text,
	View,
	Button
} from "native-base"
import styles from "./styles"

class Interests extends Component {

	componentDidMount() {
		this.props.getInterests()
	}

	componentWillReceiveProps(nextProps) {
		// Check if user selected his/her interests
		if (this.props.myInterests != nextProps.myInterests && nextProps.myInterests.length > 0) {
			// Open the main screen
			Actions.reset("main")
		}
	}

	render() {
		return <Container style={styles.container}>
			<Image style={styles.logo} source={require("src/assets/icons/logo.png")} />
			<Text style={styles.title}>What are you interested in?</Text>
			<Text style={styles.desc}>Pick your favorite interests to connect with people that share... </Text>
			<View style={styles.interestsWrapper}>
				{this.props.interests.map((interest) =>
					this.renderInterest(interest)
				)}
			</View>
			<View style={styles.buttonWrapper}>
				<Button
					style={this.props.selectedInterests.length == 0 ? styles.buttonDisabled : styles.button}
					disabled={this.props.selectedInterests.length == 0}
					onPress={() => this.props.saveMyInterests(
						this.props.userId,
						this.props.interests,
						this.props.selectedInterests
					)}>
					<Text style={styles.buttonText}>Next</Text>
					<Image style={styles.buttonIcon} source={require('src/assets/icons/back.png')} />
				</Button>
			</View>
		</Container>
	}

	renderInterest(interest) {
		return <Button
			style={this.props.selectedInterests.indexOf(interest.id) != -1 ? styles.interestBgSelected : styles.interestBg}
			key={interest.id}
			onPress={() => this.props.selectInterest(interest.id)}>
			<Text style={this.props.selectedInterests.indexOf(interest.id) != -1 ? styles.interestTextSelected : styles.interestText}>{interest.interest}</Text>
		</Button>
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		userId: state.authReducers.auth.response.uid,
		myInterests: state.authReducers.auth.myInterests,
		interests: state.interestsReducers.interests.interests,
		selectedInterests: state.interestsReducers.interests.selectedInterests
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Interests)
