import { useState } from "react";
import Display from "./Display";
import DrumPad from "./DrumPad";
import sounds from "../store/sounds";

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const updateDisplay = (soundName) => {
    setDisplay(soundName);
  };

  return (
    <div id="drum-machine">
      <div className="drum-pads">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.key}
            sound={sound}
            text={sound.key}
            updateDisplay={updateDisplay}
          />
        ))}
      </div>
      <Display display={display} />
    </div>
  );
};
export default DrumMachine;
