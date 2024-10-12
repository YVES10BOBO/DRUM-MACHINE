import React from "react";
import DrumMachine from "./components/DrumMachine"; // Import the main DrumMachine component
import './App.css';  // Import global CSS (if any)

function App() {
  return (
    <div className="App">
      <DrumMachine /> {/* Render the DrumMachine component */}
    </div>
  );
}

export default App;
