import React, { useState } from "react";
import "./Updates.css";

const ImprovedUpdatesMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  const updates = [
    "Scholarship Programme for Diaspora Children (SPDC)",
    "Register for the Bharat Ko Janiye (BKJ) Quiz today!",
    "Important updates regarding the upcoming examination dates",
    "New initiatives for student welfare announced.",
  ];

  return (
    <div
      className="improved-marquee-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="updates-section">
        <span className="updates-label">Updates</span>
        <button
          className="play-pause-btn"
          onClick={handlePauseToggle}
          title={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>
      <div className={`scrolling-text ${isPaused ? "paused" : ""}`}>
        {updates.map((update, index) => (
          <span key={index} className="scroll-item">
            {update} {index !== updates.length - 1 && <span className="dot">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImprovedUpdatesMarquee;
