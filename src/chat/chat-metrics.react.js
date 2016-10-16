import React from 'react';

function ChatMetrics({messageList, newMessage}) {

  let numberOfCharacters = newMessage.length;
  let numberOfMessages = messageList.length;

  let timeOfLastMessage;

  if (numberOfMessages > 0) {
    let lastMessage = messageList[messageList.length - 1];
    let date = new Date(lastMessage.timestamp);
    timeOfLastMessage = date.toLocaleTimeString();
  }

  return (
    <div className="chat-metrics">
      <table>
        <tbody>
          <tr>
            <td>Number of characters:</td>
            <td className="right">{numberOfCharacters}</td>
          </tr>
          <tr>
            <td>Number of messages:</td>
            <td className="right">{numberOfMessages}</td>
          </tr>
          <tr>
            <td>Time of last message:</td>
            <td className="right">{timeOfLastMessage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ChatMetrics;
