import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage("Hello, Welcome to student info system!", {
      delay: 500,
      widget: "gotItButton",
    }),
  ],
  state: {},
  userAvatar: "",
  botAvatar: "",
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => {
        const handleButtonClick = () => {
          props.actionProvider.handleGotItButtonClick();
        };

        return <button onClick={handleButtonClick}>Got it!</button>;
      },
    },
    {
      widgetName: "ageInput",
      widgetFunc: (props) => {
        const handleAgeButtonClick = () => {
          props.actionProvider.handleAge();
        };

        return (
          <div>
            <input type="text" placeholder="Enter your Age" />
            <button onClick={handleAgeButtonClick}>Submit</button>
          </div>
        );
      },
    },
  ],
};

export default config;
