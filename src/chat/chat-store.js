import {EventEmitter} from 'events';
import dispatcher from './chat-dispatcher';
import messageApi from './message-api';

const storeChangeEvent = 'chat-store-change';

class ChatStore extends EventEmitter {

	constructor() {
		super();
		this._messages = [];
		this._newMessage = '';
		this._giphys = [];
		this._giphyRequestStatus = '';

		dispatcher.register(this.handleAction.bind(this));
	}

	get messageList() {
		return this._state.messageList;
	}

	get newMessage() {
		return this._state.newMessage;
	}

	get giphys() {
		return this._giphys;
	}

	get giphyRequestStatus() {
		return this._giphyRequestStatus;
	}

	handleAction(action) {

		console.log(action.type);

		switch(action.type) {
			case 'change-new-message':
				this._state.newMessage = action.payload.content;
				this.emitChange();
				break;

			case 'submit-message':
				this._submitMessage();
				this.emitChange();
				break;

			case 'incoming-new-message':
				this._incomingNewMessage(action.payload.content);
				this.emitChange();
				break;

			case 'add-new-giphy':
				this._addNewGiphy(action.payload.giphyData);
				this.emitChange();
				break;

			case 'add-giphy-list':
				this._addGiphyList(action.payload.giphyList);
				this.emitChange();
				break;

			case 'giphy-request-fetching':
				this._giphyRequestStatus = 'fetching';
				this.emitChange();
				break;

			case 'giphy-request-success':
				this._giphyRequestStatus = 'success';
				this.emitChange();
				break;

			case 'giphy-request-failed':
				this._giphyRequestStatus = 'failure';
				this.emitChange();
				break;

			default:
				break;
		}
	}

	_submitMessage() {
		if (this._state.newMessage.trim().length > 0) {
			messageApi.publish(this._state.newMessage);
			this._state.newMessage = '';
		}
	}

	_incomingNewMessage(content) {
		let messageObj = {
			id: Date.now(),
			content
		};

		this._state.messageList.push(messageObj);
	}

	_addNewGiphy(giphyData) {
		this._giphys.push({
			id: this._giphys.length,
			url: giphyData.images.fixed_height.url
		});
	}

	_addGiphyList(giphyList) {
		for (let giphyData of giphyList) {
			this._addNewGiphy(giphyData);
		}
	}

	emitChange() {
		this.emit(storeChangeEvent);
	}

	addEventListener(callback) {
		this.on(storeChangeEvent, callback);
	}

	removeEventListener(callback) {
		this.removeListener(storeChangeEvent, callback);
	}
}

let chatStore = new ChatStore();

export default chatStore;
