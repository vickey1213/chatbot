import React, { useState, useEffect } from "react";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  handleNextStep,
}) => {
  console.log("Children is", handleNextStep);
  const [countdown, setCountdown] = useState(5);

  const handleGotItButtonClick = () => {
    const botMessage = createChatBotMessage("Enter your Name");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleNextStep();
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage("Enter your Age");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleNextStep();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotItButtonClick,
            handleAge,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
