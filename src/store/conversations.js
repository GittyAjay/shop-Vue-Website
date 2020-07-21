
import uuidv4 from 'uuid/v4'

const state = {
	all: {},
	allIds: [],
	allMsgIds: []
}
const mutations = {
	SET_CONVERSATION(state, { conversation }) {
		const data = conversation.data()
		console.log(conversation + "setconversion")
		console.log(data + "setconversion")
		state.all = { ...state.all, [conversation.id]: { created: data.created, messages: [] } }
		state.allIds.push(conversation.id)
	},
	ADD_MESSAGE(state, { conversationId, message }) {
		if (!state.allMsgIds.includes(message.id)) {
			state.all[conversationId].messages.push(message)
			state.allMsgIds.push(message.id)
		}
	},
}

const actions = {
	//first check for init or seed, then send
	sendMessage({ rootState }, { text, created, sender, conversationId }) {
		let convoRef = rootState.db.collection('conversations').doc(conversationId)
		convoRef.get().then(function (doc) {
			if (doc.exists) {
				console.log("doc already Present");
				convoRef.update({
					messages: [...state.all[conversationId].messages, { id: uuidv4(), created, sender, text }]
				})
					.then(res => console.log('Message sent.' + res))
					.catch(err => console.log('Error', err))
			} else {
				// doc.data() will be undefined in this case
				console.log("doc is not present");
				convoRef.set({
					created: Date.now(),
					messages: [
						{ id: uuidv4(), text: 'Hi', sender: "admin", created: Date.now() },
					]
				}).then(res => {
					console.log(res);
					convoRef.update({
						messages: [...state.all[conversationId].messages, { id: uuidv4(), created, sender, text }]
					})
						.then(res => console.log('Message sent.' + res))
						.catch(err => console.log('Error', err))
				})
			}
		}).catch(function (error) {
			console.log("Error getting document:", error);
		});
	},
	async get({ commit, rootState }) {
		let convoRef = rootState.db.collection('conversations')//.doc(conversationId)
		let convos = await convoRef.get()
		convos.forEach(conversation => commit('SET_CONVERSATION', { conversation })
		)
	}
}

export default { namespaced: true, state, mutations, actions }
