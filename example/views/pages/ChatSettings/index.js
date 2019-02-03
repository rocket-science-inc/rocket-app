import React, { Component } from "react"
import { connect } from "react-redux"
import { Switch } from "react-native"
import { bindActionCreators } from "redux"
import {
	Container,
	Thumbnail,
	View,
	Text,
	Separator,
	ListItem,
	Left,
	Right,
	Content
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import { duckOperations } from "src/redux/Chat/duck"

class ChatSettings extends Component {

	render() {
		return (
			<Container style={styles.container}>
				<Toolbar screen={"chatSettings"} />
				<View style={styles.profile_wrapper}>
					<Thumbnail style={styles.image} source={{ uri: this.props.recipient.photo }} />
					<Text style={styles.name}>{this.props.recipient.name}</Text>
					<Text style={styles.username}>@{this.generateUsername(this.props.recipient.name)}</Text>
				</View>
				<Content bounces={false}>
					<Separator style={styles.list_separator}>
						<Text style={styles.list_separator_text}>NOTIFICATIONS</Text>
					</Separator>
					<ListItem style={styles.list_item_narrow}>
						<Left>
							<Text style={styles.list_title}>Mute conversation</Text>
						</Left>
						<Right>
							<Switch
								onTintColor={"#D81B60"}
								onValueChange={(value) => this.props.toggleInAppSounds(value)}
							/>
						</Right>
					</ListItem>
					<View style={styles.list_spacer}/>
					<ListItem style={styles.list_item}>
						<Text style={styles.list_title}>Block @{this.generateUsername(this.props.recipient.name)}</Text>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<Text style={styles.list_title}>Report @{this.generateUsername(this.props.recipient.name)}</Text>
					</ListItem>
					<View style={styles.divider_wrapper}>
						<View style={styles.divider} />
					</View>
					<ListItem style={styles.list_item}>
						<Text style={styles.list_title_purple}>Delete conversation</Text>
					</ListItem>
				</Content>
			</Container>
		)
	}

	generateUsername(name){
		return name.toLowerCase().replace(" ", "");
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatSettings)