import React, { Component } from "react"
import {
	AsyncStorage,
	Image,
	TouchableHighlight,
	TouchableWithoutFeedback,
	Dimensions,
	ScrollView,
	PanResponder,
	Animated,
	Easing,
	Linking
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
	View,
	Button,
	Spinner
} from "native-base"
import Toolbar from "src/views/components/Toolbar"
import styles from "./styles"
import { Actions } from "react-native-router-flux"
import { duckOperations } from "src/redux/Main/duck"
import BackgroundGeolocation from "react-native-background-geolocation"
import firebase from "react-native-firebase"
import MapView, { ProviderPropType, Marker, AnimatedRegion } from 'react-native-maps'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import Geocoder from 'react-native-geocoder'
import Interactable from 'react-native-interactable'
import GlobalStyles from "src/views/common/GlobalStyles"
import SvgUri from 'react-native-svg-uri'
import MapViewDirections from 'react-native-maps-directions'
import { TouchThroughView, TouchThroughWrapper } from 'react-native-touch-through-view'
import LinearGradient from 'react-native-linear-gradient'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import call from 'react-native-phone-call'
import moment from 'moment'

const LATITUDE_OFFSET = ifIphoneX(0.0089, 0.0095)
const DEFAULT_PADDING = { top: 80, right: 80, bottom: 440, left: 80 }
const Screen = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height - 75
}

class Main extends Component {

	constructor(props) {
		super(props)
		this.state = {
			foundLocation: false,
			selectedPlace: null,
			activeSlide: 0
		}
		this.yOffset = new Animated.Value(0)

		this.bottomSheetY = new Animated.Value(1)
		this.matchedLayoutY = new Animated.Value(1)
	}

	componentDidMount() {
		// Wire up event-listeners
		BackgroundGeolocation.on('location', this.onLocation.bind(this), this.onError)

		// Execute #ready method (required)
		BackgroundGeolocation.ready({
			reset: true,
			// Geolocation Config
			desiredAccuracy: 0,
			distanceFilter: 10,
			// Activity Recognition
			stopTimeout: 1,
			// Application config
			debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
			logLevel: BackgroundGeolocation.LOG_LEVEL_OFF,
			stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
			startOnBoot: true        // <-- Auto start tracking when device is powered-up.
		}, (state) => {
			if (!state.enabled) {
				// Start tracking
				BackgroundGeolocation.start()
			}
		})

		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.onLocation(position)

				let location = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				}
				Geocoder.geocodePosition(location).then(res => {
					let address
					// Use different address formats for US and other countries
					if (res[0].country == "United States") {
						address = res[0].locality + ", " + res[0].adminArea
					} else {
						address = res[0].locality
					}
					this.props.saveAddress(address)
				})
			}, function (error) { alert(error) },
		)
	}

	async onLocation(location) {
		const userId = await AsyncStorage.getItem('userId');
		if (userId !== null) {
			this.moveMapTo(userId, location.coords.latitude, location.coords.longitude)
			this.props.saveLocation(location.coords.latitude, location.coords.longitude)
		}
	}

	async moveMapTo(userId, latitude, longitude) {
		const newCoordinate = {
			latitude,
			longitude
		}

		if (this.map != null) {
			this.setState({ foundLocation: true })

			let coordinate
			if (this.isEmpty(this.props.matchedPlace)) {
				this.map.animateToRegion({
					latitude: latitude - LATITUDE_OFFSET,
					longitude: longitude,
					latitudeDelta: 0.03,
					longitudeDelta: 0.03
				})
			}
		}

		await firebase.firestore().collection('users').doc(userId).update({
			latitude,
			longitude
		})
	}

	onError(error) {
		console.warn('- [event] location error ', error)
	}

	isEmpty(obj) {
		return (Object.getOwnPropertyNames(obj).length === 0);
	}

	render() {
		if (!this.isEmpty(this.props.matchedPlace) && !this.panelOpened) {
			this.timeoutHandle = setTimeout(() => {
				this.openBottomPanel()
			}, 5000)
			this.panelOpened = true
		}

		return (
			<Container style={styles.container}>
				<Toolbar screen={"main"} />
				<MapView
					provider="google"
					ref={map => this.map = map}
					style={[styles.map, { opacity: this.state.foundLocation ? 1 : 0 }]}>

					{!this.isEmpty(this.props.myLocation) ?
						<Marker.Animated
							ref={marker => { this.marker = marker }}
							coordinate={this.props.myLocation}
							centerOffset={{ x: 0.5, y: 0.5 }}
							anchor={{ x: 0.5, y: 0.5 }}
							flat={true}>
							<Image
								source={require('src/assets/icons/marker_me.png')}
								style={styles.marker_me}
							/>
						</Marker.Animated>
						: null}
					{!this.isEmpty(this.props.matchedPlace) ?
						<Marker.Animated
							coordinate={this.props.matchedPlace.coords}
							centerOffset={{ x: 0.5, y: 1 }}
							anchor={{ x: 0.5, y: 1 }}
							flat={true}>
							<Image
								source={require('src/assets/icons/marker_place.png')}
								style={styles.marker}
							/>
						</Marker.Animated>
						: null}
					{!this.isEmpty(this.props.matchedPlace) && !this.isEmpty(this.props.myLocation) ?
						<MapViewDirections
							mode={"walking"}
							origin={this.props.myLocation}
							destination={this.props.matchedPlace.coords}
							apikey={"AIzaSyAxgilxr1RtEdwViQq2a7TJ2khemXxM06E"}
							strokeWidth={3}
							strokeColor={GlobalStyles.$primaryColor}
							onReady={(result) => {
								this.props.updateNavigationDuration(result.duration)

								this.map.fitToCoordinates(result.coordinates, {
									edgePadding: DEFAULT_PADDING,
									animated: true
								})
							}}
						/>
						: null}
				</MapView>
				{this.isEmpty(this.props.matchedPlace) ? this.renderPlaces() : this.renderBottomPanel()}
				{this.isEmpty(this.props.matchedPlace) ? this.renderPlaces() : this.renderMatchedLayout()}
			</Container>
		)
	}

	renderBottomPanel() {
		return <TouchThroughWrapper style={styles.panel_container}>
			<Animated.View
				pointerEvents={'box-none'}
				style={[styles.panel_container, {
					backgroundColor: 'black',
					opacity: this.yOffset.interpolate({
						inputRange: [0, 210],
						outputRange: [0, 0.5]
					})
				}]} />

			<Animated.ScrollView
				bounces={false}
				scrollEventThrottle={16}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { y: this.yOffset } } }],
					{ useNativeDriver: true }
				)}
				style={{
					transform: [
						{
							translateY: this.matchedLayoutY.interpolate({
								inputRange: [0, 1],
								outputRange: [400, 0]
							})
						}
					]
				}}
				showsVerticalScrollIndicator={false}>
				<TouchThroughView style={styles.panel_touch_through} />
				<Animated.View
					style={[styles.bg_wrapper, {
						transform: [
							{
								translateY: this.yOffset.interpolate({
									inputRange: [0, 20, 209, 210],
									outputRange: [ifIphoneX(541, 461), ifIphoneX(541, 461), 210, 210]
								})
							}
						]
					}]}>
					<LinearGradient colors={['#fc518d', '#000000']} style={styles.bg_gradient}>
						<Image style={styles.bg_image} source={{ uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350" }} />
					</LinearGradient>

					<Animated.View style={[styles.down_arrow, {
						opacity: this.yOffset.interpolate({
							inputRange: [0, 140, 160, 210, 270, 290],
							outputRange: [0, 0, 1, 1, 1, 0]
						}),
						transform: [
							{
								translateY: this.yOffset.interpolate({
									inputRange: [0, 200, 210, 310],
									outputRange: [0, 0, 10, 100]
								})
							}
						]
					}]}>
						<SvgUri width={28} height={28} source={require("src/assets/icons/arrow_bottom.svg")} />
					</Animated.View>
				</Animated.View>

				<View style={styles.panel}>
					<View style={styles.profile_wrapper}>
						<View style={styles.image_wrapper}>
							<Image style={styles.image} source={{ uri: this.props.matchedUser.photo + "?width=500" }} />
						</View>
						<Text style={styles.name}>{this.props.matchedUser.fullName}</Text>
						<Text style={styles.bio}>Deterministic optimist</Text>
						<View style={styles.divider} />
						<Text style={styles.bio}>I'm feeling for a {this.props.matchedPlace.type}</Text>
						<View style={styles.estimation_wrapper}>
							<SvgUri width={12} height={12} source={require("src/assets/icons/road.svg")} />
							<Text style={styles.estimation}>
								{moment.duration(this.props.navigationDuration * 60 * 1000).humanize()}…
							</Text>
						</View>
					</View>
					<View style={styles.actions_wrapper}>
						<Button style={styles.action_secondary} onPress={() => this.viewMatchProfile()}>
							<Text style={styles.action_secondary_text}>View Profile</Text>
						</Button>
						<Button style={styles.action_primary}>
							<Text style={styles.action_primary_text}>Start Chat</Text>
						</Button>
					</View>
					<Text style={styles.details_place_title}>{this.props.matchedPlace.name}</Text>
					<Text style={styles.details_place_desc}>‘{this.props.matchedPlace.desc}’</Text>

					<Carousel
						style={{ height: 350 }}
						data={this.props.matchedPlace.photos}
						renderItem={this.renderSlide}
						onSnapToItem={(index) => this.setState({ activeSlide: index })}
						sliderWidth={Screen.width}
						itemWidth={Screen.width - 26}
						inactiveSlideScale={1}
						inactiveSlideOpacity={1}
					/>
					{this.pagination}

					<View style={[styles.contacts_wrapper, { marginTop: this.props.matchedPlace.photos.length > 1 ? -16 : 40 }]}>
						<Text style={styles.contacts_title}>Contacts</Text>
						<View style={styles.phone_wrapper}>
							<View style={styles.phone_icon}>
								<SvgUri width={16} height={16} source={require("src/assets/icons/phone.svg")} />
							</View>
							<Text style={styles.contacts_label}>{this.props.matchedPlace.phone}</Text>
							<Button style={styles.contacts_button} onPress={() => this.call()}>
								<Text style={styles.contacts_button_text}>Call</Text>
							</Button>
						</View>
						<View style={styles.website_wrapper}>
							<View style={styles.website_icon}>
								<SvgUri width={16} height={16} source={require("src/assets/icons/website.svg")} />
							</View>
							<Text style={styles.contacts_label}>{this.formatWebsite(this.props.matchedPlace.website)}</Text>
							<Button style={styles.contacts_button} onPress={() => this.visitWebsite()}>
								<Text style={styles.contacts_button_text}>Visit Website</Text>
							</Button>
						</View>
					</View>
					<View style={styles.details_wrapper}>
						<Text style={styles.contacts_title}>Location</Text>
						<Text style={styles.location_text}>{this.props.matchedPlace.address}</Text>
					</View>
					<View style={styles.details_wrapper}>
						<Text style={styles.contacts_title}>Business Timings</Text>
						{this.theSameTimings() ? this.renderTimingsSame() : this.consistentTimings() ? this.renderTimingsShort() : this.renderTimingsFull()}
					</View>
					<Button style={styles.cancel_chat_button}>
						<Text style={styles.cancel_chat_button_text}>Cancel Chat</Text>
					</Button>
				</View>
			</Animated.ScrollView>
		</TouchThroughWrapper>
	}

	viewMatchProfile() {
		Actions.userProfile({ matchedUser: this.props.matchedUser })
	}

	theSameTimings() {
		let hoursMon = this.formatHours(this.props.matchedPlace.opening_hours[0])
		let hoursTue = this.formatHours(this.props.matchedPlace.opening_hours[1])
		let hoursWed = this.formatHours(this.props.matchedPlace.opening_hours[2])
		let hoursThu = this.formatHours(this.props.matchedPlace.opening_hours[3])
		let hoursFri = this.formatHours(this.props.matchedPlace.opening_hours[4])
		let hoursSat = this.formatHours(this.props.matchedPlace.opening_hours[5])
		let hoursSun = this.formatHours(this.props.matchedPlace.opening_hours[6])

		return hoursMon == hoursTue &&
			hoursTue == hoursWed &&
			hoursWed == hoursThu &&
			hoursThu == hoursFri &&
			hoursFri == hoursSat &&
			hoursSat == hoursSun
	}

	consistentTimings() {
		let hoursMon = this.formatHours(this.props.matchedPlace.opening_hours[0])
		let hoursTue = this.formatHours(this.props.matchedPlace.opening_hours[1])
		let hoursWed = this.formatHours(this.props.matchedPlace.opening_hours[2])
		let hoursThu = this.formatHours(this.props.matchedPlace.opening_hours[3])
		let hoursFri = this.formatHours(this.props.matchedPlace.opening_hours[4])
		let hoursSat = this.formatHours(this.props.matchedPlace.opening_hours[5])
		let hoursSun = this.formatHours(this.props.matchedPlace.opening_hours[6])

		return hoursMon == hoursTue &&
			hoursTue == hoursWed &&
			hoursWed == hoursThu &&
			hoursThu == hoursFri &&
			hoursSat == hoursSun
	}

	renderTimingsSame() {
		return <View style={styles.timings_wrapper}>
			<View style={styles.timings_column}>
				<Text style={styles.timings_header}>Every day</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[0]) : "-"}</Text>
			</View>
		</View>
	}

	renderTimingsShort() {
		return <View style={styles.timings_wrapper}>
			<View style={styles.timings_column}>
				<Text style={styles.timings_header}>Mon - Fri</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[0]) : "-"}</Text>
			</View>
			<View style={styles.timings_column}>
				<Text style={styles.timings_header}>Sat - Sun</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[5]) : "-"}</Text>
			</View>
		</View>
	}

	renderTimingsFull() {
		return <View style={styles.timings_wrapper}>
			<View style={styles.timings_column}>
				<Text style={styles.timings_header}>Monday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[0]) : "-"}</Text>
				<Text style={styles.timings_header}>Tuesday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[1]) : "-"}</Text>
				<Text style={styles.timings_header}>Wednesday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[2]) : "-"}</Text>
				<Text style={styles.timings_header}>Thursday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[3]) : "-"}</Text>
			</View>
			<View style={styles.timings_column}>
				<Text style={styles.timings_header}>Friday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[4]) : "-"}</Text>
				<Text style={styles.timings_header}>Saturday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[5]) : "-"}</Text>
				<Text style={styles.timings_header}>Sunday</Text>
				<Text style={styles.timings_text}>{this.props.matchedPlace.opening_hours ? this.formatHours(this.props.matchedPlace.opening_hours[6]) : "-"}</Text>
			</View>
		</View>
	}

	formatHours(hours) {
		return hours
			.replace("Monday: ", "")
			.replace("Tuesday: ", "")
			.replace("Wednesday: ", "")
			.replace("Thursday: ", "")
			.replace("Friday: ", "")
			.replace("Saturday: ", "")
			.replace("Sunday: ", "")
			.replace(" AM", "am")
			.replace(" PM", "pm")
			.replace("–", "-")
	}

	call() {
		const args = {
			number: this.props.matchedPlace.phone, // String value with the number to call
			prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
		}

		call(args).catch(console.error)
	}

	visitWebsite() {
		Linking.canOpenURL(this.props.matchedPlace.website).then(supported => {
			if (supported) {
				Linking.openURL(this.props.matchedPlace.website);
			} else {
				console.log("Don't know how to open URI: " + this.props.matchedPlace.website);
			}
		});
	}

	get pagination() {
		const { activeSlide } = this.state;
		return (
			<View style={{ marginTop: -24 }}>
				<Pagination
					dotsLength={this.props.matchedPlace.photos.length}
					activeDotIndex={activeSlide}
					dotStyle={styles.active_dot}
					inactiveDotStyle={styles.dot}
					inactiveDotOpacity={1}
					inactiveDotScale={1}
				/>
			</View>
		);
	}

	formatWebsite(website) {
		return website.replace('http://', '').replace('https://', '').replace('www.', '').split(/[/?#]/)[0]
	}

	renderSlide({ item, index }) {
		return <View style={styles.slide_image_wrapper} key={item.photo_reference}>
			<Image style={styles.slide_image} source={{
				uri: "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1000&photoreference=" + item.photo_reference + "&key=AIzaSyAxgilxr1RtEdwViQq2a7TJ2khemXxM06E"
			}} />
		</View>
	}

	renderPlaces() {
		return <View style={styles.places_container}>
			<View style={styles.interactable_wrapper}>
				<Button transparent style={styles.place_confirm} onPress={() => this.confirmPlace("cafe")}>
					<SvgUri width={30} height={30} source={require("src/assets/icons/confirm.svg")} />
					<Text style={styles.place_confirm_text}>CONFIRM</Text>
				</Button>
				<Interactable.View
					ref={(ref) => this.place_cafe = ref}
					horizontalOnly={true}
					animatedNativeDriver={true}
					snapPoints={[{ x: 0 }, { x: 100 }]}
					boundaries={{ left: 0, right: 100 }}
					onSnap={(event) => this.onSnap(event.nativeEvent.index, 0)}>
					<TouchableHighlight style={styles.place_highlight} onPress={() => this.selectPlace(0)} underlayColor="gray">
						<View
							style={styles.place_wrapper}>
							<Image style={styles.place_image} source={require("src/assets/icons/place_cafe.png")} />
							<View style={styles.place_text_wrapper}>
								<Text style={styles.place_title}>I’m feeling for a Coffee</Text>
								<Text style={styles.place_desc}>We can serve for many requirements so why not get in touch.</Text>
							</View>
						</View>
					</TouchableHighlight>
				</Interactable.View>
			</View>
			<View style={styles.interactable_wrapper}>
				<Button transparent style={styles.place_confirm} onPress={() => this.confirmPlace("bar")}>
					<SvgUri width={30} height={30} source={require("src/assets/icons/confirm.svg")} />
					<Text style={styles.place_confirm_text}>CONFIRM</Text>
				</Button>
				<Interactable.View
					ref={(ref) => this.place_bar = ref}
					horizontalOnly={true}
					animatedNativeDriver={true}
					snapPoints={[{ x: 0 }, { x: 100 }]}
					boundaries={{ left: 0, right: 100 }}
					onSnap={(event) => this.onSnap(event.nativeEvent.index, 1)}>
					<TouchableHighlight style={styles.place_highlight} onPress={() => this.selectPlace(1)} underlayColor="gray">
						<View
							style={styles.place_wrapper}>
							<Image style={styles.place_image} source={require("src/assets/icons/place_bar.png")} />
							<View style={styles.place_text_wrapper}>
								<Text style={styles.place_title}>I’m feeling for a Bar</Text>
								<Text style={styles.place_desc}>Kadıköy’ün kafeleriyle ve restoranlarıyla ünlü en eski semtlerinden olan.</Text>
							</View>
						</View>
					</TouchableHighlight>
				</Interactable.View>
			</View>
			<View style={styles.interactable_wrapper}>
				<Button transparent style={styles.place_confirm} onPress={() => this.confirmPlace("restaurant")}>
					<SvgUri width={30} height={30} source={require("src/assets/icons/confirm.svg")} />
					<Text style={styles.place_confirm_text}>CONFIRM</Text>
				</Button>
				<Interactable.View
					ref={(ref) => this.place_lunch = ref}
					horizontalOnly={true}
					animatedNativeDriver={true}
					snapPoints={[{ x: 0 }, { x: 100 }]}
					boundaries={{ left: 0, right: 100 }}
					onSnap={(event) => this.onSnap(event.nativeEvent.index, 2)}>
					<TouchableHighlight style={styles.place_highlight} onPress={() => this.selectPlace(2)} underlayColor="gray">
						<View
							style={styles.place_wrapper}>
							<Image style={styles.place_image} source={require("src/assets/icons/place_lunch.png")} />
							<View style={styles.place_text_wrapper}>
								<Text style={styles.place_title}>I’m feeling for a Lunch</Text>
								<Text style={styles.place_desc}>We can serve for many requirements so why not get in touch.</Text>
							</View>
						</View>
					</TouchableHighlight>
				</Interactable.View>
			</View>
		</View>
	}

	renderMatchedLayout() {
		return <TouchableWithoutFeedback style={styles.matched_container_wrapper} underlayColor="transparent" onPress={() => this.openBottomPanel()}>
			<Animated.View style={[styles.matched_container, {
				transform: [
					{
						translateY: this.bottomSheetY.interpolate({
							inputRange: [0, 1],
							outputRange: [0, 352]
						})
					}
				]
			}]}>
				{this.props.matchedPerson == null ?
					<View style={styles.matched_wrapper}>
						<SvgUri width={42} height={42} source={require("src/assets/icons/like.svg")} />
						<Text style={styles.matched_title}>{this.parseFirstName(this.props.matchedUser.fullName)}{" "}
							and You are matched to {this.props.matchedPlace.name}!
						</Text>
						<Text style={styles.matched_desc}>{this.props.matchedInterests && this.props.matchedInterests.length > 1
							? "You share a lot of common" : "You share a common interest"}</Text>
						<View style={styles.interests_wrapper}>
							{this.props.matchedInterests && this.props.matchedInterests.map(interest => (
								this.renderInterest(interest)
							))}
						</View>
						<SvgUri width={28} height={28} source={require("src/assets/icons/arrow.svg")} />
						<Text style={styles.learn_more}>Learn More</Text>
					</View>
					: this.renderProgressBar()
				}
			</Animated.View>
		</TouchableWithoutFeedback>
	}

	parseFirstName(fullName) {
		return fullName.split(" ")[0]
	}

	openBottomPanel() {
		clearTimeout(this.timeoutHandle)

		Animated.timing(
			this.matchedLayoutY,
			{
				toValue: 1,
				duration: 300,
				delay: 500,
				easing: Easing.ease,
				useNativeDriver: true
			}
		).start()
		Animated.timing(
			this.bottomSheetY,
			{
				toValue: 1,
				duration: 500,
				easing: Easing.ease,
				useNativeDriver: true
			}
		).start()
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutHandle)
	}

	renderProgressBar() {
		return <Spinner size="large" color="white" style={styles.spinner} />
	}

	renderInterest(interest) {
		return <View
			key={interest}
			style={styles.interestBg}>
			<Text style={styles.interestText}>{interest}</Text>
		</View>
	}

	confirmPlace(type) {
		if (!this.props.myLocation) {
			alert("Please allow location access in settings")
			return
		}

		this.bottomSheetY = new Animated.Value(0)
		this.matchedLayoutY = new Animated.Value(0)

		this.props.findMatch(type, this.props.myLocation.latitude, this.props.myLocation.longitude, this.props.gender)
	}

	onSnap(index, position) {
		if (index == 1) {
			if (position == 0) {
				this.place_bar.snapTo({ index: 0 })
				this.place_lunch.snapTo({ index: 0 })
			} else if (position == 1) {
				this.place_cafe.snapTo({ index: 0 })
				this.place_lunch.snapTo({ index: 0 })
			} else if (position == 2) {
				this.place_cafe.snapTo({ index: 0 })
				this.place_bar.snapTo({ index: 0 })
			}

			this.setState({ selectedPlace: position })
		}
	}

	selectPlace(position) {
		let alreadySelected = this.state.selectedPlace == position

		if (position == 0) {
			this.place_cafe.snapTo({ index: !alreadySelected })
			this.place_bar.snapTo({ index: 0 })
			this.place_lunch.snapTo({ index: 0 })
		} else if (position == 1) {
			this.place_cafe.snapTo({ index: 0 })
			this.place_bar.snapTo({ index: !alreadySelected })
			this.place_lunch.snapTo({ index: 0 })
		} else if (position == 2) {
			this.place_cafe.snapTo({ index: 0 })
			this.place_bar.snapTo({ index: 0 })
			this.place_lunch.snapTo({ index: !alreadySelected })
		}

		this.setState({ selectedPlace: alreadySelected ? null : position })
	}
}

/**
 * This function takes data from the app current state,
 * and insert/links it into the props of our component.
 */
function mapStateToProps(state, props) {
	return {
		userId: state.authReducers.auth.response.uid,
		gender: state.authReducers.auth.response.gender,
		myLocation: state.authReducers.auth.location,
		matchedPlace: state.mainReducers.main.matchedPlace,
		matchedUser: state.mainReducers.main.matchedUser,
		matchedInterests: state.mainReducers.main.matchedInterests,
		navigationDuration: state.mainReducers.main.navigationDuration
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
