import React, { useEffect } from "react";
import './DrumPad.css';

const DrumPad = ({ pad, updateDisplay }) => {
  const playSound = () => {
    const audio = document.getElementById(pad.key);
    if (audio) {
      audio.currentTime = 0; // Rewind to start
      audio.play().catch(error => {
        console.error("Audio play failed:", error);
      });
      updateDisplay(pad.id);
    } else {
      console.error(`Audio element not found for key: ${pad.key}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key.toUpperCase() === pad.key) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id={pad.id} className="drum-pad" onClick={playSound}>
      {pad.key}
      <audio className="clip" id={pad.key} src={pad.src}></audio>
    </div>
  );
};

export default DrumPad;
