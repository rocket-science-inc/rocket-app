import React, { Component } from "react"
import {
	Image,
	View,
	FlatList,
	TouchableHighlight,
	AsyncStorage
} from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
	Container,
	Content,
	Text,
	Left,
	Right,
	Body,
	Item,
	Icon,
	Input,
	Thumbnail,
	List,
	ListItem,
	Badge
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import GlobalStyles from "src/views/common/GlobalStyles"
import moment from 'moment'
import { Actions } from "react-native-router-flux"
import { duckOperations } from "src/redux/ChatList/duck"
import ProgressView from "src/views/components/ProgressView"

class ChatList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		this.props.loadConversations().then(() =>
			this.setState({ loading: false })
		)
	}

	render() {
		return (
			<Container style={styles.container}>
				<Toolbar logOut={this.props.logOut} screen={"chatList"} />
				{this.props.loggedIn ?
					this.state.loading ?
						<ProgressView />
						:
						<Content>
							<Item style={styles.search_bar_wrapper}>
								<Item style={styles.search_bar}>
									<Input style={styles.search_input}
										textAlign={'center'}
										placeholder="Search for meeting"
										placeholderTextColor={GlobalStyles.$inputPlaceholderColor}
									/>
								</Item>
							</Item>
							<FlatList
								data={this.props.conversations}
								renderItem={({ item }) => this.renderItem(item)}
								keyExtractor={(item, index) => item.id}>

							</FlatList>
						</Content>
					: null
				}
			</Container>
		)
	}

	renderItem(item) {
		var time = moment(new Date()).format("hh:mm A")

		return <TouchableHighlight underlayColor={GlobalStyles.$touchableHighlightColor} onPress={() => this.openChat(item)}>
			<View style={styles.list_item_wrapper}>
				<Image style={styles.list_image} source={{ uri: item.photo }} />
				<View style={styles.list_item}>
					<View style={styles.list_content}>
						<Text style={styles.list_title}>{item.name}</Text>
						<Text style={styles.list_message}>{item.message}</Text>
					</View>
					<View style={styles.list_details}>
						<Text style={styles.list_time}>{time}</Text>
						{item.badge ?
							<View style={styles.list_badge}>
								<Text style={styles.list_badge_text}>{item.badge}</Text>
							</View>
							: null}
					</View>
				</View>
			</View>
		</TouchableHighlight>
	}

	openChat(item) {
		Actions.chat({
			recipient: {
				name: item.name,
				photo: item.photo
			}
		});
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
		photo: state.authReducers.auth.response.photoURL,
		conversations: state.chatListReducers.conversations.data
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList)
