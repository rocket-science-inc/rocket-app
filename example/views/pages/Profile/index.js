import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
	Image
} from "react-native"
import {
	Container,
	View,
	Text,
	Button
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from "react-native-router-flux"

class Profile extends Component {

	render() {
		return (
			<Container style={styles.container}>
				<Toolbar screen={"profile"} />
				<View style={styles.body}>
					<LinearGradient colors={['#fc518d', '#000000']} style={styles.bg_gradient}>
						<Image style={styles.bg_image} source={this.props.photo ? { uri: this.props.photo + "?width=1000" } : null} />
					</LinearGradient>
					<View style={styles.wrapper}>
						<View style={styles.image_wrapper}>
							<Image style={styles.image} source={this.props.photo ? { uri: this.props.photo + "?width=1000" } : null} />
						</View>
						<Text style={styles.name}>{this.props.name}</Text>
						<Text style={styles.bio}>Optimistic planning of deterministic systems</Text>
					</View>
					<View style={styles.buttons_wrapper}>
						<Button style={styles.button} onPress={() => Actions.editProfile()}>
							<Text style={styles.button_text}>Edit Profile</Text>
						</Button>
						<Button style={styles.button} onPress={() => Actions.settings()}>
							<Text style={styles.button_text}>Settings</Text>
						</Button>
						<Button style={styles.button}>
							<Text style={styles.button_text}>Contact &amp; FAQ</Text>
						</Button>
					</View>
				</View>
			</Container>
		)
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		name: state.authReducers.auth.response.displayName,
		photo: state.authReducers.auth.response.photoURL
	}
}

export default connect(mapStateToProps, null)(Profile)
