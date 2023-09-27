import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
//  import "../ChetBot/Main.css"
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./Config";
import { ReactComponent as ButtonIcon } from "../ChetBot/robot.svg";
import { ConditionallyRender } from "react-util-kit";

function Chatbotfile() {
  const [showChatbot, toggleChatbot] = useState(true);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };
  return (
    <div className="App">
      <div className="app-chatbot-container">
        <ConditionallyRender
        ifTrue={showChatbot}
          show={
            <Chatbot
              config={config}
              messageParser={MessageParser}
              messageHistory={loadMessages()}
              actionProvider={ActionProvider}
              saveMessages={saveMessages}
            />
          }
        />
      </div>
      <button
        className="app-chatbot-button"
        onClick={() => toggleChatbot((prev) => !prev)}
      >
        <ButtonIcon className="app-chatbot-button-icon" />
      </button>
    </div>
  );
}

export default Chatbotfile;
