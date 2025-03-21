import React, { useState, useEffect } from "react";
import "./App.css";
import bgImage from "./assets/hackverse-bg.png";

const App = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24-hour countdown
  const [isRunning, setIsRunning] = useState(false); // Track timer state

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return; // Don't run if not started

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs} hrs`;
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="content">
        <div className="timer-box">
          <div className="timer-text">{formatTime(timeLeft)}</div>
        </div>
  
        {!isRunning && (
          <button className="start-button" onClick={startTimer}>
            Start
          </button>
        )}
      </div>
    </div>
  );
  
};

export default App;
