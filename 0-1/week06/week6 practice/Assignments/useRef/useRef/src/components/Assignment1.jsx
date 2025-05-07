import React, { useRef, useState, useEffect } from "react";

export function Assignment1() {
  const inputRef = useRef();
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");

  // Focus the input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, [inputText]);

  // Focus input and update the display text when button is clicked
  const handleButtonClick = () => {
    inputRef.current.focus();
    setDisplayText(inputText);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text here"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleButtonClick}>Submit & Focus</button>
      <p>{displayText}</p>
    </div>
  );
}
