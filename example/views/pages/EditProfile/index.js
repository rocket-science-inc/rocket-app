import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import {
	Image
} from "react-native"
import {
	Thumbnail,
	Container,
	View,
	Text,
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
import { Col, Row, Grid } from "react-native-easy-grid"
import SvgUri from 'react-native-svg-uri'

class EditProfile extends Component {

	render() {
		return (
			<Container style={styles.container}>
				<Toolbar screen={"editProfile"} />
				<Content>
					<View style={styles.grid_wrapper}>
						<Grid>
							<Row size={3}>
								<Col size={3}>
									<Image source={{ uri: this.props.photo + "?width=1000" }} style={styles.photo} />
									<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
								</Col>
								<Col size={1}>
									<Row>
										<Image source={{ uri: "https://media.nngroup.com/media/people/photos/Kim-Flaherty-Headshot.png.400x400_q95_autocrop_crop_upscale.png" }} style={styles.photo} />
										<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
									</Row>
									<Row>
										<Image source={{ uri: "https://1ofdmq2n8tc36m6i46scovo2e-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/Steven_Hallam-slide.jpg" }} style={styles.photo} />
										<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
									</Row>
									<Row>
										<Image source={{ uri: "https://st2.depositphotos.com/4421371/11303/i/950/depositphotos_113033834-stock-photo-highly-detailed-close-up-portrait.jpg" }} style={styles.photo} />
										<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
									</Row>
								</Col>
							</Row>
							<Row size={1}>
								<Col>
									<Image source={{ uri: "https://media.nngroup.com/media/people/photos/Kathryn_1.jpg.400x400_q95_autocrop_crop_upscale.jpg" }} style={styles.photo} />
									<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
								</Col>
								<Col>
									<Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1vm8IIToHQa0sMm1fILzI3hDze-mpvPiWU3eyeRAonPQ7e52M4g" }} style={styles.photo} />
									<Thumbnail square style={styles.edit} source={require('src/assets/icons/delete.png')} />
								</Col>
								<Col>
									<View style={styles.photo_empty} >
										<Icon style={styles.photo_add} name="add" />
									</View>
								</Col>
								<Col>
									<View style={styles.photo_empty} />
								</Col>
							</Row>
						</Grid>
					</View>

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
						<Right style={styles.username_wrapper}>
							<Text style={styles.username}>Claim yours</Text>
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
							<Switch value={true} onTintColor={"#D81B60"} />
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
							<Switch onTintColor={"#D81B60"} />
						</Right>
					</ListItem>
					<Text style={styles.info}>Turning this on will allow your friends to find you and invite you to swipe togehter.</Text>
				</Content>
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
		photo: state.authReducers.auth.response.photoURL,
		address: state.authReducers.auth.location.address
	}
}

export default connect(mapStateToProps, null)(EditProfile)
