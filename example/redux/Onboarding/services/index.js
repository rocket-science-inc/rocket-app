import firebase from "react-native-firebase"
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk"
import { AsyncStorage } from "react-native"

class Auth {

	static gender

	static async getAuthFacebook() {
		try {
			const result = await LoginManager.logInWithReadPermissions([
				"user_photos",
				"public_profile",
				"email",
				"user_gender"
			])

			if (result.isCancelled) {
				return new Error("User cancelled request")
			}

			const data = await AccessToken.getCurrentAccessToken()

			if (!data) {
				return new Error("Something went wrong obtaining the users access token")
			}

			// Retrieve user gender
			await AccessToken.getCurrentAccessToken().then(
				async (data) => {
					const infoRequest = new GraphRequest(
						'/me?fields=gender',
						null,
						(error, result) => this.responseInfoCallback(error, result, data)
					)
					// Start the graph request.
					await new GraphRequestManager().addRequest(infoRequest).start()
				}
			)

			const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)

			const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential)

			// Retrieve the Firebase Cloud Messaging token (used for push notifications)
			//const fcmToken = await firebase.messaging().getToken();
			const fcmToken = null

			// Save the user data in the Cloud Firestore
			await this.saveUserDataFirestore(currentUser, fcmToken, Auth.gender);

			return Object.assign({}, currentUser.user.toJSON(), { fcmToken, gender: Auth.gender })

		} catch (error) {
			return error
		}
	}
	//Create response callback.
	static async responseInfoCallback(error, result, data) {
		if (error) {
			alert(error.toString())
			return
		} else {
			Auth.gender = result.gender
		}
	}

	static async saveUserDataFirestore(currentUser, fcmToken, gender) {
		// Retrieve the required fields from user data
		let fullName = currentUser.user.displayName
		let email = currentUser.user.email
		let photo = currentUser.user.photoURL
		let userId = currentUser.user.uid

		// Store the userId in local storage
		// (used for background location updates)
		await AsyncStorage.setItem('userId', userId)

		// Save them in the Cloud Firestore database
		await firebase.firestore().collection('users').doc(userId).update({
			fullName,
			email,
			photo,
			fcmToken,
			gender
		})
	}

	// Clear the session data and log out of Facebook
	static logOutFacebook() {
		LoginManager.logOut()
	}

	static async getMyInterests(userId) {
		let myInterests = []

		await firebase.firestore().collection('user_interests').where('userId', '==', userId).get().then(ref => {
			ref.forEach(doc => myInterests.push(Object.assign({}, doc._data, { id: doc.id })))
		})

		return myInterests
	}
}

export default Auth
