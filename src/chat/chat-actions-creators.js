import dispatcher from './chat-dispatcher';

const chatActionCreators = {

  changeNewMessage(newMessage) {
    let action = {
      type: 'change-new-message',
      payload: {
        content: newMessage
      }
    };

    dispatcher.dispatch(action);
  },

  submitNewMessage() {
    let action = {
      type: 'submit-new-message'
    };

    dispatcher.dispatch(action);
  }
};

export default chatActionCreators;
