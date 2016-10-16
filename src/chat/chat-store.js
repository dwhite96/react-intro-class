import {EventEmitter} from 'events';
import dispatcher from './chat-dispatcher';

const storeChangeEvent = 'store-change-event';

class ChatStore extends EventEmitter {

  constructor() {
    super();
    this._messageList = [];
    this._newMessage = '';

    dispatcher.register(this.handleAction.bind(this));
  }

  get messageList() {
    return this._messageList;
  }

  get newMessage() {
    return this._newMessage;
  }

  handleAction(action) {
    console.log(action);

    switch(action.type) {

      case 'change-new-message':
        this._newMessage = action.payload.content;
        this.emitChange();
        break;

      case 'submit-new-message':
        this._submitNewMessage();
        this.emitChange();
        break;

      default:
        break;
    }
  }

  _submitNewMessage() {
    if (this._newMessage.trim().length > 0) {
      let message = {
        id: this._messageList.length,
        content: this._newMessage,
        timestamp: Date.now()
      };

      this._messageList.push(message);
      this._newMessage = '';
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

const chatStore = new ChatStore();

export default chatStore;
