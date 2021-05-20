import React from "react";
import "./ChatToolbar.css";

const ChatToolbar = () => {
  return (
    <div className="ChatToolbar">
      <a
        href="#!"
        className="ChatToolbar__Item"
      >
        Правила
      </a>
      <a href="#!" className="ChatToolbar__Item">
        Магазин
      </a>
      <a href="#!" className="ChatToolbar__Item">
        Оффлайн PM
      </a>
      <a href="#!" className="ChatToolbar__Item">
        Мы!
      </a>
      <a href="#!" className="ChatToolbar__Item">
        Профиль
      </a>
      <a href="#!" className="ChatToolbar__Item">
        Выход
      </a>
    </div>
  );
};

export default ChatToolbar;
