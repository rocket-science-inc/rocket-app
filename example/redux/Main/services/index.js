import firebase from "react-native-firebase"
import { AsyncStorage } from "react-native"

class Firebase {

	static async saveAddress(address) {
		const userId = await AsyncStorage.getItem('userId');
		if (userId !== null) {
			// Save address in the Cloud Firestore database
			await firebase.firestore().collection('users').doc(userId).update({
				address
			})
		}
	}

	static async findNearbyPlace(type, lat, lng) {
		const place = await fetch("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="
			+ lat + "," + lng
			+ "&radius=1609&type="
			+ type
			+ "&key=AIzaSyAwSGCFLJ-ra5Kwz_-QhdQM6BaAMgidce0")
			.then((response) => response.json())
			.then((responseJson) => {
				let result = responseJson.results[0]
				let place = {
					id: result.place_id,
					name: result.name,
					coords: {
						latitude: result.geometry.location.lat,
						longitude: result.geometry.location.lng
					},
					address: result.vicinity
				}
				return place
			})
			.catch((error) => {
				return "Error"
				console.error(error);
			});

		const placeDetails = await fetch("https://maps.googleapis.com/maps/api/place/details/json?placeid="
			+ place.id
			+ "&fields=name,formatted_phone_number,website,reviews,photos,opening_hours&key=AIzaSyAxgilxr1RtEdwViQq2a7TJ2khemXxM06E")
			.then((response) => response.json())
			.then((responseJson) => {
				let result = responseJson.result

				let placeDetails = {
					phone: result.formatted_phone_number,
					website: result.website,
					desc: result.reviews[0].text,
					photos: result.photos,
					opening_hours: result.opening_hours.weekday_text
				}
				return placeDetails
			})
			.catch((error) => {
				return "Error"
				console.error(error);
			});

		placeResult = Object.assign({}, place, placeDetails)
		placeResult = Object.assign({}, placeResult, { type })

		return placeResult
	}

	static async findMatchedUser(gender) {
		const userId = await AsyncStorage.getItem('userId')

		// Retrieve my interests from the DB
		let myInterests = []
		await firebase.firestore().collection('user_interests').where('userId', '==', userId).get()
			.then(snapshot => {
				snapshot.forEach(doc => {
					let interest = doc.data()
					myInterests.push(interest.interestId)
				})
			})

		let user
		let sameInterests
		let maxSameInterestsCount = 0
		let matchedUser
		let matchedInterestIds

		// Retrieve other users from the DB
		await firebase.firestore().collection('users').get()
			.then(async (snapshot) => {
				for (let doc of snapshot._docs) {
					user = Object.assign({}, doc.data(), { id: doc.id })

					// Skip my profile and people of the same gender
					if (user.id == userId || user.gender == gender) continue

					// Get a list of user interests
					await firebase.firestore().collection('user_interests').where('userId', '==', user.id).get()
						.then(userInterestsSnapshot => {
							sameInterests = this.retrieveInterests(userInterestsSnapshot, myInterests)

							if (sameInterests.length > maxSameInterestsCount) {
								maxSameInterestsCount = sameInterests.length

								matchedUser = user
								matchedInterestIds = sameInterests
							}
						})
				}
			})

		let matchedInterests = await this.retrieveInterestNames(matchedInterestIds)

		return { user: matchedUser, interests: matchedInterests }
	}

	static retrieveInterests(userInterestsSnapshot, myInterests) {
		let userInterests = []
		userInterestsSnapshot.forEach(doc => {
			let interest = doc.data()
			userInterests.push(interest.interestId)
		})

		let sameInterests = []
		myInterests.forEach(myInterest => {
			if (userInterests.includes(myInterest)) {
				sameInterests.push(myInterest)
			}
		})

		return sameInterests
	}

	static async retrieveInterestNames(matchedInterestIds) {
		let matchedInterests = []
		for (let interestId of matchedInterestIds) {
			await firebase.firestore().collection('interests').doc(interestId).get()
				.then(doc => {
					matchedInterests.push(doc.data().interest)
				})
		}
		return matchedInterests
	}
}

export default Firebase