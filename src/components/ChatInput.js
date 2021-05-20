import React, { useState, useEffect, createRef } from "react";
import "./ChatInput.css";

const ChatInput = ({ onChangeText, onChangeTo, onSubmit, onSubmitPrivate }) => {
  const [text, setText] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    onChangeText(text);
    onChangeTo(to);
  }, [text, to]);

  const textInputRef = createRef();

  return (
    <div className="ChatInput">
      <input onChange={(event) => setTo(event.target.value)} value={to} />
      <input
        style={{
          width: "100%",
        }}
        onChange={(event) => setText(event.target.value)}
        value={text}
        ref={textInputRef}
      />
      <div className="ChatInput__Buttons">
        <button
          onClick={() => {
            onSubmit();
            setText("");
            textInputRef.current.focus();
          }}
        >
          ВСЕМ
        </button>
        <button
          onClick={() => {
            onSubmitPrivate();
            setText("");
          }}
        >
          ПРИВАТ
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
