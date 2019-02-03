import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Alert } from "react-native"
import {
	Thumbnail,
	Container,
	View,
	Text,
	Button,
	List,
	ListItem,
	Icon,
	Left,
	Right,
	Separator,
	Content,
	Switch,
	CheckBox,
	Body
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import { duckOperations } from "src/redux/Settings/duck"
import { Actions } from "react-native-router-flux"

class Settings extends Component {

	constructor(props) {
		super(props)
		this.state = {
			version: "1.0"
		}
	}

	componentDidMount() {
		this.getAppVersion()
	}

	getAppVersion() {
		var packageJson = require('../../../../package.json')
		this.setState({ version: packageJson.version })
	}

	render() {
		return (
			<Container style={styles.container}>
				<Toolbar screen={"settings"} />
				<Content>
					<Separator style={styles.list_separator}>
						<Text style={styles.list_separator_text}>DOUBLE ROW LIST</Text>
					</Separator>
					<ListItem style={styles.list_item}>
						<Left style={styles.multi_line_wrapper}>
							<Text style={styles.list_title}>My Current Location</Text>
							<Text style={styles.list_desc}>{this.props.address ? this.props.address : "Unknown"}</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>

					<Separator style={styles.list_separator}>
						<Text style={styles.list_separator_text}>MULTI LINE LIST</Text>
					</Separator>
					<ListItem style={styles.list_item}>
						<Left>
							<Text style={styles.list_title}>Help &amp; Support</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<Left>
							<Text style={styles.list_title}>Username</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<Left>
							<Text style={styles.list_title}>Messages</Text>
						</Left>
						<Right>
							<Icon name="arrow-forward" />
						</Right>
					</ListItem>

					<Separator style={styles.list_separator}>
						<Text style={styles.list_separator_text}>SLIDER SELECTOR</Text>
					</Separator>
					<ListItem style={styles.list_item}>
						<Left>
							<Text style={styles.list_title}>In-App Sounds</Text>
						</Left>
						<Right>
							<Switch
								value={this.props.in_app_sounds_enabled}
								onTintColor={"#D81B60"}
								onValueChange={(value) => this.props.toggleInAppSounds(value)}
							/>
						</Right>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<Left>
							<Text style={styles.list_title}>Message Likes</Text>
						</Left>
						<Right>
							<Switch
								value={this.props.message_likes_enabled}
								onTintColor={"#D81B60"}
								onValueChange={(value) => this.props.toggleMessageLikes(value)}
							/>
						</Right>
					</ListItem>
					<Text style={styles.info}>Turning this on will allow your friends to find you and invite you to swipe togehter.</Text>

					<Separator style={styles.list_separator}>
						<Text style={styles.list_separator_text}>SINGLE SELECTION</Text>
					</Separator>
					<ListItem style={styles.list_item}>
						<CheckBox checked={true} color={"#D81B60"} />
						<Body>
							<Text>Choice #1</Text>
						</Body>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<CheckBox color={"#D81B60"} />
						<Body>
							<Text>Choice #2</Text>
						</Body>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<CheckBox checked={true} color={"#D81B60"} />
						<Body>
							<Text>Choice #3</Text>
						</Body>
					</ListItem>

					<Button style={styles.button} onPress={() => this.askLogOut()}>
						<Text style={styles.button_text}>Logout</Text>
					</Button>

					<Thumbnail square style={styles.logoIcon} source={require("src/assets/icons/logo.png")} />
					<Text style={styles.version}>Version {this.state.version}</Text>
				</Content>
			</Container>
		)
	}

	askLogOut() {
		Alert.alert(
			"Do you want to log out?",
			'',
			[
				{ text: 'Cancel' },
				{
					text: 'Log out', onPress: () => {
						this.props.logOut().then(() => Actions.reset("onboarding"))
					}
				},

			]
		)
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		address: state.authReducers.auth.location.address,
		in_app_sounds_enabled: state.settingsReducers.settings.in_app_sounds_enabled,
		message_likes_enabled: state.settingsReducers.settings.message_likes_enabled
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
