import React, { Component } from "react"
import {
	Image,
	View,
	Text,
	KeyboardAvoidingView
} from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import ReversedFlatList from 'react-native-reversed-flat-list';
import {
	Container,
	Content,
	Footer,
	Input,
	Button
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import GlobalStyles from "src/views/common/GlobalStyles"
import { duckOperations } from "src/redux/Chat/duck"
import { Actions } from "react-native-router-flux"

class Chat extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: ""
		}
	}

	componentDidMount() {
		this.props.loadMessages()
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Container>
					<Toolbar recipient={this.props.recipient} screen={"chat"} />
					<ReversedFlatList
						data={this.props.messages}
						renderItem={({ item, index }) => item.sender_id == this.props.userId
							? this.renderMyItem(item, index) : this.renderItem(item, index)}
						keyExtractor={(item, index) => item.id}>
					</ReversedFlatList>
					<Footer style={styles.footer}>
						<Input
							ref={input => { this.textInput = input }}
							style={styles.input}
							value={this.state.message}
							placeholder="Type your messages …"
							placeholderTextColor={"#e0e4e7"}
							onChangeText={(message) => this.setState({ message })} />
						<Button style={styles.button} transparent onPress={() => this.sendMessage()}>
							<Text style={[styles.button_text, {
								color: this.state.message ? GlobalStyles.$primaryColor : "#929292"
							}]}>Send</Text>
						</Button>
					</Footer>
				</Container>
			</KeyboardAvoidingView>
		)
	}

	sendMessage() {
		// Make sure the message is not empty
		if (!this.state.message) return;

		// Clear the text input
		this.setState({ message: "" })

		// Save the message in Firestore
		this.props.sendMessage({
			message: this.state.message,
			my: true,
			time: Math.floor(Date.now() / 1000),
			id: Math.floor(Date.now() / 1000) + "",
			sender_id: this.props.userId,
			sending: true
		}).then(() => this.props.loadMessages());
	}

	renderItem(item, index) {
		var time = moment.unix(item.time).calendar().replace(" at", ",");

		return <View style={[styles.list_item_wrapper, {
			paddingBottom: index == 0 ? 24 : 2,
			paddingTop: index + 1 == this.props.messages.length ? 24 : 12,
			opacity: item.sending ? 0.5 : 1
		}]}>
			<Image style={styles.list_image} source={{ uri: this.props.recipient.photo }} />
			<View style={styles.list_item}>
				<View style={styles.list_bubble}>
					<Text style={styles.list_message}>{item.message}</Text>
				</View>
				<Text style={styles.list_time}>{item.sending ? "Sending …" : time}</Text>
			</View>
		</View>
	}

	renderMyItem(item, index) {
		var time = moment.unix(item.time).calendar().replace(" at", ",");

		return <View style={[styles.list_item_wrapper_my, {
			paddingBottom: index == 0 ? 24 : 2,
			paddingTop: index + 1 == this.props.messages.length ? 24 : 12,
			opacity: item.sending ? 0.5 : 1
		}]}>
			<View style={styles.list_item_my}>
				<LinearGradient colors={['#fc518d', '#d60060']} style={styles.list_bubble_my}>
					<Text style={styles.list_message_my}>{item.message}</Text>
				</LinearGradient>
				<Text style={styles.list_time_my}>{item.sending ? "Sending …" : time}</Text>
			</View>
		</View>
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		userId: state.authReducers.auth.response.uid,
		messages: state.chatReducers.messages.data
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)