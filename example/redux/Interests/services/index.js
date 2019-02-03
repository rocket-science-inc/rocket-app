import firebase from "react-native-firebase"
import { AccessToken, LoginManager } from "react-native-fbsdk"

class Interests {

	static async getInterests() {
		let interests = []

		await firebase.firestore().collection('interests').get().then(ref => {
			ref.forEach(doc => interests.push(Object.assign({}, doc._data, { id: doc.id })))
		})

		return interests
	}

	static async saveMyInterests(userId, interests, selectedInterests) {
		let myInterests = []

		// Create an array from selected interests
		interests.map((interest) => {
			if (selectedInterests.indexOf(interest.id) != -1) {
				myInterests.push(interest)
			}
		})

		// Delete the old interests from Firebase
		let db = firebase.firestore()
		await db.collection('user_interests').where('userId', '==', userId).get()
			.then(function (querySnapshot) {
				// Once we get the results, begin a batch
				var deleteBatch = db.batch()

				querySnapshot.forEach(function (doc) {
					// For each doc, add a delete operation to the batch
					deleteBatch.delete(doc.ref)
				});

				// Commit the batch
				deleteBatch.commit()
			})

		// Save my new interests to the Firestore DB
		var addBatch = db.batch()
		myInterests.map((interest) => {
			let newInterest = [...interest]
			var newInterestRef = db.collection('user_interests').doc()
			let interestId = interest.id
			delete newInterest.id
			addBatch.set(newInterestRef, Object.assign({}, newInterest, { userId, interestId }))
		})
		await addBatch.commit()

		return myInterests
	}
}

export default Interests
