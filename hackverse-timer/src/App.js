import React, { useState, useEffect } from "react";
import "./App.css";
import bgImage from "./assets/hackverse-bg.png"; // Import your background image

const App = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24-hour countdown in seconds
  const [isRunning, setIsRunning] = useState(false); // Track whether the timer is running

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return; // Stop timer if not running or reached 00:00:00

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // Function to format time into HH:MM:SS
  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs} hrs`;
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="timer-wrapper">
        <div className="timer-overlay">{formatTime(timeLeft)}</div>
        <button className="start-button" onClick={() => setIsRunning(true)}>Start</button>
      </div>
    </div>
  );
  
  
  
};

export default App;
