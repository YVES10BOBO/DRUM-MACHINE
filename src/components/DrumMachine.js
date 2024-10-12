import React, { useState } from "react";
import DrumPad from "./DrumPad";
import Display from "./Display";
import './DrumMachine.css';

const DrumMachine = () => {
  const [displayText, setDisplayText] = useState("");

  const updateDisplay = (text) => {
    setDisplayText(text);
  };

  return (
    <div id="drum-machine">
      <Display text={displayText} />
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad key={pad.id} pad={pad} updateDisplay={updateDisplay} />
        ))}
      </div>
    </div>
  );
};

const drumPads = [
  { key: "Q", id: "Heater-1", src: "path-to-audio/Heater-1.mp3" },
  { key: "W", id: "Heater-2", src: "path-to-audio/Heater-2.mp3" },
  { key: "E", id: "Heater-3", src: "path-to-audio/Heater-3.mp3" },
  { key: "A", id: "Heater-4", src: "path-to-audio/Heater-4.mp3" },
  { key: "S", id: "Clap", src: "path-to-audio/Clap.mp3" },
  { key: "D", id: "Open-HH", src: "path-to-audio/Open-HH.mp3" },
  { key: "Z", id: "Kick-n-Hat", src: "path-to-audio/Kick-n-Hat.mp3" },
  { key: "X", id: "Kick", src: "path-to-audio/Kick.mp3" },
  { key: "C", id: "Closed-HH", src: "path-to-audio/Closed-HH.mp3" },
];

export default DrumMachine;
