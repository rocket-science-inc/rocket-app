import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
	Image
} from "react-native"
import {
	Container,
	Content,
	View,
	Text,
	Button
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import LinearGradient from 'react-native-linear-gradient'
import { Actions } from "react-native-router-flux"
import SvgUri from 'react-native-svg-uri'
import { duckOperations } from "src/redux/UserProfile/duck"

class UserProfile extends Component {

	componentDidMount() {
		this.props.getMatchInterests(this.props.matchedUser.id)
	}

	render() {
		console.log(this.props.matchedUser)
		return (
			<Container style={styles.container}>
				<Toolbar screen={"userProfile"} />
				<Content showsVerticalScrollIndicator={false} bounces={false}>
					<View style={styles.body}>
						<LinearGradient colors={['#fc518d', '#000000']} style={styles.bg_gradient}>
							<Image style={styles.bg_image} source={this.props.matchedUser.photo ? { uri: this.props.matchedUser.photo + "?width=1000" } : null} />
						</LinearGradient>
						<View style={styles.wrapper}>
							<View style={styles.image_wrapper}>
								<Image style={styles.image} source={this.props.matchedUser.photo ? { uri: this.props.matchedUser.photo + "?width=1000" } : null} />
							</View>
							<Text style={styles.name}>{this.props.matchedUser.fullName}</Text>
							<Text style={styles.bio}>Optimistic planning of deterministic systems</Text>
						</View>
						<View style={styles.block}>
							<View style={styles.info_wrapper}>
								<View style={styles.info_icon}>
									<SvgUri width={14} height={14} source={require("src/assets/icons/address.svg")} />
								</View>
								<Text style={styles.info_text}>{this.props.matchedUser.address}</Text>
							</View>
							<View style={styles.info_wrapper}>
								<View style={styles.info_icon}>
									<SvgUri width={14} height={14} source={require("src/assets/icons/phone.svg")} />
								</View>
								<Text style={styles.info_text}>+84 (510) 567-8909</Text>
							</View>
							<View style={styles.info_wrapper}>
								<View style={styles.info_icon}>
									<SvgUri width={14} height={14} source={require("src/assets/icons/email.svg")} />
								</View>
								<Text style={styles.info_text}>{this.props.matchedUser.email}</Text>
							</View>
						</View>
						<View style={styles.block}>
							<View style={styles.info_wrapper}>
								<View style={styles.info_icon}>
									<SvgUri width={14} height={14} source={require("src/assets/icons/info.svg")} />
								</View>
								<Text style={styles.info_text}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
							</View>
						</View>
						<View style={styles.block}>
							<View style={styles.interestsWrapper}>
								{this.props.matchInterests && this.props.matchInterests.map((interest) =>
									this.renderInterest(interest)
								)}
							</View>
						</View>
					</View>
				</Content>
			</Container>
		)
	}

	renderInterest(interest) {
		return <Button
			style={styles.interestBg}
			key={interest}>
			<Text style={styles.interestText}>{interest}</Text>
		</Button>
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		matchInterests: state.userProfileReducers.userProfile.matchInterests

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
