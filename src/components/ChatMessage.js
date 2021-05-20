import React from "react";
import classNames from "classnames";
import "./ChatMessage.css";

const TYPE_DEFAULT = 0;
const TYPE_MY = 1;
const TYPE_ME = 2;
const TYPE_ANNOUNCEMENT = 3;

const ChatMessage = ({
  type,
  id,
  fromId,
  from,
  fromHtmlNick,
  to,
  toId,
  text,
  date,
  onFromNickClick,
  onTimeClick,
}) => {
  return (
    <div className="message" key={id}>
      <span
        className={classNames({
          [type === TYPE_MY
            ? "message-my"
            : type === TYPE_ME
            ? "message-me"
            : type === TYPE_ANNOUNCEMENT
            ? "message-announcement"
            : ""]: true,
        })}
      >
        <span className="message-time" onClick={onTimeClick}>
          {`${date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()}:${
            date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()
          }:${
            date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds()
          }`}
        </span>
        <span
          className="message-nick"
          onClick={onFromNickClick}
          dangerouslySetInnerHTML={{
            __html: fromHtmlNick,
          }}
        ></span>
        <span>:</span>
        {to ? <span>{to}&gt;</span> : null}
        <span className="message-text">{text}</span>
      </span>
    </div>
  );
};

export default ChatMessage;
export { TYPE_DEFAULT, TYPE_MY, TYPE_ME, TYPE_ANNOUNCEMENT };
