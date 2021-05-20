import React from "react";
import "./ChatUser.css";

const ChatUser = ({
  id,
  htmlNick,
  onNickClick,
  onInfoClick,
  sex,
  havePhoto,
}) => {
  return (
    <div className="ChatUser">
      <div className="ChatUser__Col ChatUser__Col-clickable">
        <img src="/static/images/utalk.gif" />
      </div>
      <div className="ChatUser__Col">
        <img
          src={
            sex && sex === 2
              ? "/static/images/male.jpg"
              : sex === 1
              ? "/static/images/female.jpg"
              : "/static/images/gender_none.gif"
          }
        />
      </div>
      <div
        className="ChatUser__Col ChatUser__Col-clickable"
        onClick={() => onInfoClick()}
      >
        <img
          src={
            havePhoto
              ? "/static/images/have_photo.jpg"
              : "/static/images/no_photo.jpg"
          }
        />
      </div>
      <div
        className="ChatUser__Col-nick"
        onClick={onNickClick}
        dangerouslySetInnerHTML={{
          __html: htmlNick,
        }}
      ></div>
      {/* {vip && (
        <div className="ChatUser__Col">
          <img src="/static/images/vip_little.gif" />
        </div>
      )} */}
    </div>
  );
};

export default ChatUser;
