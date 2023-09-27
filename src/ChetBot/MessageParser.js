import React from "react";

const MessageParser = ({ children, actions }) => {
  console.log(children);

   const parse = (message) => {

    const lowercase = message.toLowerCase();

  //   if (children.props.state.checker === "age") {
  //   return  actions.afterNameMessage();
  //   }
  //   if(children.props.state.checker === "slow") {
  //  return  actions.afterNameMessage1();
  // }

  if(lowercase.includes("site")){
    return actions.afterNameMessage1();
  }
  if(lowercase.includes("yesh")){
    return actions.afterNameMessage();
  }
    actions.initialAction();
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
