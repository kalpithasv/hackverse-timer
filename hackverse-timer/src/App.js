import React, { useState, useEffect } from "react";
import "./App.css";
import bgImage from "./assets/hackverse-bg.png";

const App = () => {
  const targetTime = new Date("2025-03-23T05:30:00Z").getTime(); // March 23, 11:00 AM IST in UTC
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, Math.floor((targetTime - Date.now()) / 1000))
  ); // Calculate initial time left in seconds
  const [isRunning, setIsRunning] = useState(true); // Timer starts running immediately

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop if time is up

    const timer = setInterval(() => {
      setTimeLeft(Math.max(0, Math.floor((targetTime - Date.now()) / 1000)));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, targetTime]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return { hours, minutes, secs };
  };

  const { hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="content">
        <div className="timer-container">
          <div className="time-box">
            <span className="time-value">{hours}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time-value">{secs}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>

        {timeLeft <= 0 && <div className="end-message">Time's up!</div>}
      </div>
    </div>
  );
};

export default App;