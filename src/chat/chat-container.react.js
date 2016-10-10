import React from 'react';

export default React.createClass({

  /*
   [x] 1. Style component by requiring chat.scss.

   [x] 2. Add placeholder "Type here" to input text.

   [x] 3. This component will render a list of messages, initially the list will be empty.
       When the list is empty, render 'No messages'.

   [x] 4. Hard-code two initial messages. Render them inside of a div with className "messages".
       (Hint: Array.map, key prop)

   [x] 5. This component will also render the new message the user is entering in the text input.
       The new message should be initially empty.
       (Hint: The text input should be a controlled component)

   [x] 6. If the new message is not empty, when the user clicks the submit button,
       add the new message to the message list.

   [x] 7. After adding the new message to the list, reset the new message

   [x] 8. If the new message is not empty, when the user hits the Enter key,
         add the new message to the message list.

   [x] 9. When the component loads, the new message input should have focus
       (Hint: refs and react component lifecycle)

   [x] 10. The user should always be able to see the last message. After a message is added
        to the list, the messages div should scroll to the bottom.
        (Hint: domElement.scrollTop = domElement.scrollHeight)

   [x] 11. Show the message count inside the "count" div.
   */

  getInitialState() {
    return {
      messageList: [],
      newMessage: ''
    };
  },

  render() {

    require('./chat.scss');

    return (
      <div className="chat-container">
        <div className="messages" ref="messages">
          {this._renderMessageList()}
        </div>
        <div className="message-input">
          <input
            placeholder="Type here"
            type="text"
            value={this.state.newMessage}
            onChange={this._onNewMessageChange}
            onKeyPress={this._onNewMessageKeyPress}
            ref={this._focusTextInput}/>

        </div>
        <div className="message-button">
          <button onClick={this._onSubmitClick}>Submit</button>
        </div>
        <div className="count">
          <span>Message count: {this.state.messageList.length}</span>
        </div>
      </div>
    );
  },

  _renderMessageList() {
    if (this.state.messageList.length === 0) {
      return <span>No messages</span>;
    }
    else {
      return this.state.messageList.map((message) => {
        return <div className="message" key={message.id}>{message.text}</div>;
      });
    }
  },

  _onNewMessageChange(event) {
    this.setState({
      newMessage: event.target.value
    });
  },

  _onSubmitClick() {
    this._addNewMessageIfNotEmpty();
  },

  _addNewMessageIfNotEmpty() {
    if (this.state.newMessage.length > 0) {
      let message = {
        id: this.state.messageList.length,
        text: this.state.newMessage
      };

      this.state.messageList.push(message);

      this.setState({
        messageList: this.state.messageList,
        newMessage: ''
      });
    }
  },

  _onNewMessageKeyPress(event) {
    if (event.key === 'Enter') {
      this._addNewMessageIfNotEmpty();
    }
  },

  _focusTextInput(domElement) {
    domElement.focus();
  },

  componentDidUpdate() {
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
  }
});
