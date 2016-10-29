import dispatcher from './chat-dispatcher';
import giphyApi from './giphy-api';

let chatActionsCreators = {

	changeNewMessage(newMessage) {

		let action = {
			type: 'change-new-message',
			payload: {
				content: newMessage
			}
		};

		dispatcher.dispatch(action);
	},

	submitMessage() {
		let action = {
			type: 'submit-message'
		};

		dispatcher.dispatch(action);
	},

	incomingMessage(msg) {

		let action = {
			type: 'incoming-new-message',
			payload: {
				content: msg
			}
		};

		dispatcher.dispatch(action);
	},
	
	checkGiphyCommand(newMessage) {
		let giphyCommand = '/giphy';
		if (newMessage.startsWith(giphyCommand)) {
			let seed = newMessage.substring(giphyCommand.length + 1);
			giphyApi.random(seed);
		}	
	},

	updateRequestStatus(actionType) {
		let action = {
			type: actionType
		};

		dispatcher.dispatch(action);
	},

	addNewGiphy(giphyData) {

		let action = {
			type: 'add-new-giphy',
			payload: {
				giphyData
			}
		};

		dispatcher.dispatch(action);
	},

	addNewGiphyList(giphyList) {
		let action = {
			type: 'add-giphy-list',
			payload: {
				giphyList
			}
		};

		dispatcher.dispatch(action);
	}
};

export default chatActionsCreators;
