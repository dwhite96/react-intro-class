import React from 'react';

export default React.createClass({
	render() {

		let timeOfLastMessage = '';

		if (this.props.messageList.length > 0) {
			let lastMessage = this.props.messageList[this.props.messageList.length - 1];
			let dateOfLastMessage = new Date(lastMessage.id);
			timeOfLastMessage = dateOfLastMessage.toLocaleTimeString();
		}

		return (
			<div className="chat-metrics">
				<table>
					<tbody>
					<tr>
						<td>New message characters</td>
						<td className="right">{this.props.newMessage.length}</td>
					</tr>
					<tr>
						<td>Number of messages</td>
						<td className="right">{this.props.messageList.length}</td>
					</tr>
					<tr>
						<td>Time of last message</td>
						<td className="right">{timeOfLastMessage}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
});
