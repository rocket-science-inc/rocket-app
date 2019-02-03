import firebase from "react-native-firebase"

class Firebase {

	static async loadConversations() {
		// Retrieve conversations from the Cloud Firestore database
		let conversations = []

		await firebase.firestore().collection('conversations').get().then(ref => {
			ref.forEach(doc => conversations.push(Object.assign({}, doc._data, { id: doc.id })))
		})

		return conversations
	}
}

export default Firebase
