import React from 'react';
import chatActionCreators from './chat-actions-creators'

export default React.createClass({

	render() {

		require('./chat.scss');

		return (
			<div className="chat-container">
				<div className="messages" ref="messagesDiv">
					{this._renderMessages()}
				</div>
				<div className="message-input">
					<input
						type="text"
						placeholder="Type here"
						value={this.props.newMessage}
						onChange={this._handleChange}
						onKeyPress={this._checkKeyPress}
						ref={this._focus}/>
				</div>
				<div className="message-button">
					<button onClick={this._submitMessage}>Submit</button>
				</div>
				<div className="count">
					{this._renderMessageCount()}
				</div>
			</div>
		);
	},

	_renderMessages() {
		if (this.props.messageList.length === 0) {
			return <span>No messages</span>;
		}
		else {
			return this.props.messageList.map(message => {
				return <div className="message" key={message.id}>{message.content}</div>
			});
		}
	},

	_handleChange(event) {
		chatActionCreators.changeNewMessage(event.target.value);
	},

	_submitMessage() {
		chatActionCreators.submitNewMessage();
	},

	_checkKeyPress(event) {
		if (event.key === 'Enter') {
			this._submitMessage();
		}
	},

	_focus(inputDomElement) {
		inputDomElement.focus();
	},

	componentDidUpdate() {
		this.refs.messagesDiv.scrollTop = this.refs.messagesDiv.scrollHeight;
	},

	_renderMessageCount() {
		return <span>Message count: {this.props.messageList.length}</span>
	}
});
