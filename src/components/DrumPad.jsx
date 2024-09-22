import { useRef, useEffect } from "react";
const DrumPad = ({ text, sound, updateDisplay }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
    updateDisplay(sound.name);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toUpperCase() === text) {
        playSound();
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [text]);

  return (
    <div className="drum-pad" id={sound.name} onClick={playSound}>
      {text}{" "}
      <audio className="clip" id={text} src={sound.url} ref={audioRef}></audio>
    </div>
  );
};
export default DrumPad;
