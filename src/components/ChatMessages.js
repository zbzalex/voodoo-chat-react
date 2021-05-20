import React, { useState, createRef, useEffect } from "react";
import "./ChatMessages.css";
import ChatMessage, {
  TYPE_DEFAULT,
  TYPE_ME,
  TYPE_MY,
  TYPE_ANNOUNCEMENT,
} from "./ChatMessage";

const ChatMessages = ({ messages }) => {
  const [user, setUser] = useState({
    id: 2,
    nick: "Admin",
    canonNick: "admin",
    htmlNick: '<img src="http://localhost/uploads/txcqn.gif" />',
    gender: 0,
    class: 0,
  });

  const messagesRef = createRef();
  useEffect(
    () => (messagesRef.current.scrollTop = messagesRef.current.scrollHeight),
    [messages]
  );
  return (
    <div className="ChatMessages" ref={messagesRef}>
      {messages.map((message) => (
        <ChatMessage
          type={
            message.from === user.nick || message.fromId === user.id
              ? TYPE_MY
              : message.to === user.nick || message.toId === user.id
              ? TYPE_ME
              : message.announcement
              ? TYPE_ANNOUNCEMENT
              : TYPE_DEFAULT
          }
          id={message.id}
          from={message.from}
          fromId={message.fromId}
          fromHtmlNick={message.fromHtmlNick}
          date={message.date}
          to={message.to}
          toId={message.toId}
          text={message.text}
          onTimeClick={() => {}}
          onFromNickClick={() => {}}
        />
      ))}
    </div>
  );
};

export default ChatMessages;
