import firebase from "react-native-firebase"
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk"
import { AsyncStorage } from "react-native"

class ApiService {

	static async getMatchInterests(userId) {
		let interestIds = []

		await firebase.firestore().collection('user_interests').where('userId', '==', userId).get().then(ref => {
			ref.forEach(doc => interestIds.push(doc.data().interestId))
		})

		interests = await this.retrieveInterestNames(interestIds)

		return interests
	}

	static async retrieveInterestNames(interestIds) {
		let interests = []
		for (let interestId of interestIds) {
			await firebase.firestore().collection('interests').doc(interestId).get()
				.then(doc => {
					interests.push(doc.data().interest)
				})
		}
		return interests
	}
}

export default ApiService
