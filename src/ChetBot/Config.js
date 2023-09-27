import { createChatBotMessage } from "react-chatbot-kit";
import Avatar from "./Avatar";
import SatartBtn from "./SatartBtn";
import StartSlow from "./StartSlow";
import VisiteLink from "./VisiteLink";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi! Welcome to Tridev Infoway.`,
      {
        widget: "startBtn",
        delay: 500,
      }
    ),
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  botName: "Tridev Infoway",
  customComponent: {
    botAvatar: (props) => <Avatar {...props} />,
  },

  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <SatartBtn {...props} />,
    },
    {
      widgetName: "startSlow",
      widgetFunc: (props) => <StartSlow {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "visiteLink",
      widgetFunc:(props) => <VisiteLink {...props} />,
    }
  ],
};

export default config;
