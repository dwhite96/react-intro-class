import React from 'react';
import chatStore from './chat-store';
import ChatContainer from './chat-container.react';
import ChatMetrics from './chat-metrics.react';

export default React.createClass({
  getInitialState() {
    return this._getState();
  },

  _getState() {
    return {
      newMessage: chatStore.newMessage,
      messageList: chatStore.messageList
    };
  },

  render() {
    return (
      <div className="chat-controller">
        <ChatContainer {...this.state} />
        <ChatMetrics {...this.state} />
      </div>
    )
  },

  componentDidMount() {
    chatStore.addEventListener(this._handleChange);
  },

  _handleChange() {
    this.setState(this._getState());
  },

  componentWillUnmount() {
    chatStore.removeEventListener(this._handleChange);
  }
});
