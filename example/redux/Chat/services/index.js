import firebase from "react-native-firebase"

class Firebase {

	static async loadMessages() {
		// Retrieve messages from the specific conversation
		let messages = [];

		await firebase.firestore().collection('messages').orderBy("time").get()
		.then(ref => {
		  ref.forEach(doc => messages.push(Object.assign({}, doc._data, { id: doc.id })))
		})

		return messages;
	}

	static async sendMessage(message){
		await firebase.firestore().collection('messages').add({
			message: message.message,
			time: message.time,
			sender_id: "ezvXZ7lo7XMunHMQjR6tVsjnkmF3",
			id: message.id
		})
	}
}

export default Firebase
