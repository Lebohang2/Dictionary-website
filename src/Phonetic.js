import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio() {
    let utterance = new SpeechSynthesisUtterance(props.word);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <div className="Phonetic">
      <button onClick={playAudio}>Listen</button>
       <p>{props.phonetic}</p>
    </div>
  );
}