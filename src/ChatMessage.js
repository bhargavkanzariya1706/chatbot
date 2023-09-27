import React from 'react';

function ChatMessage({ message }) {
  const isUserMessage = message.sender === 'user'; // You might need to adjust this based on your data structure

  return (
    <div className={`chat-message ${isUserMessage ? 'user' : 'bot'}`}>
      <div className="message-content">{message.text}</div>
    </div>
  );
}

export default ChatMessage;
