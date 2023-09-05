import React, { useState } from "react";
import config from "../bot/config.js";
import MessageParser from "../bot/MessageParser.jsx";
import ActionProvider from "../bot/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

const ChatBot = () => {
  const [userProgress, setUserProgress] = useState(0);
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const handleNextStep = () => {
    setUserProgress(userProgress + 1);
  };

  const handleNameInput = (name) => {
    // Store the user's name in state
    setUserName(name);

    // Move to the next step
    handleNextStep();
  };

  const handleAgeInput = (age) => {
    // Store the user's age in state
    setUserAge(age);

    // Move to the next step
    handleNextStep();
  };

  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={(props) => (
          <ActionProvider
            {...props}
            setUserName={setUserName}
            setUserAge={setUserAge}
            handleNextStep={handleNextStep}
            handleNameInput={handleNameInput}
            handleAgeInput={handleAgeInput}
          />
        )}
      />
      {userProgress === 1 && (
        <div>
          <input
            type="text"
            placeholder="Enter your Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={() => handleNameInput(userName)}>Submit</button>
        </div>
      )}
      {userProgress === 2 && (
        <div>
          <select value={userAge} onChange={(e) => setUserAge(e.target.value)}>
            <option value="">Select your Age</option>
            <option value="18">18</option>
            <option value="19">19</option>
            {/* Add more age options here */}
          </select>
          <button onClick={() => handleAgeInput(userAge)}>Submit</button>
        </div>
      )}
      {userProgress === 3 && (
        <div>
          <p>Thank you. In 5 seconds, the bot will exit...</p>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
