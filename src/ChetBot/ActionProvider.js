import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const afterNameMessage = () => {
    const message = createChatBotMessage(
      "Let us know if you need help! and we will help you in that way.",
      {}
    );
    updateState(message);
  };

  const afterNameMessage1 = () => {
    const message = createChatBotMessage(
      "yeah,if you want to see our site then you have below link you can see...",
      {
        widget: "visiteLink",
        loading: true,
        terminateLoading: true,
      }
    );
    updateState(message);
  };

  const initialAction = () => {
    const message = createChatBotMessage(`Hi!😁 ${`\n`}
    How may I help you?`);
    updateState(message);
  };

  const updateState = (message, checker = "", ages = "") => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
      checker,
      ages,
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            afterNameMessage,
            afterNameMessage1,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
