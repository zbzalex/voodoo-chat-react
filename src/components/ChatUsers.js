import React from "react";
import ChatUser from "./ChatUser";
import "./ChatUsers.css";

const LIST = ["Все", "Админы", "Шаманы", "Девушки", "Парни", "Они"];

const LIST_COLORS = [
  "#7ec63e",
  "#469cb9",
  "#ffb900",
  "#e963b0",
  "#fd691e",
  "#666666",
];

const ChatUsers = ({ count, users, onTitleClick, onNickClick, onInfoClick }) => {
  return (
    <div className="Users">
      {users &&
        users.length &&
        LIST.map(
          (title, i) =>
            (i === 0 || (users[i - 1] && users[i - 1].length > 0)) && (
              <div key={i}>
                <div
                  className="Users__ListItem"
                  style={{
                    "background-color": LIST_COLORS[i],
                  }}
                >
                  <span
                    className="Users__ListItem-title"
                    onClick={() => onTitleClick(i)}
                  >
                    {title.toUpperCase()}
                  </span>
                  <span className="Users__ListItem-count">
                    ({i === 0 ? count : users[i - 1] && users[i - 1].length})
                  </span>
                </div>
                <div>
                  {i !== 0 &&
                    users[i - 1] &&
                    users[i - 1].length > 0 &&
                    users[i - 1].map((user) => (
                      <ChatUser
                        id={user.id}
                        htmlNick={user.html_nick}
                        onNickClick={() => onNickClick(user.nick)}
                        onInfoClick={() => onInfoClick(user.id)}
                        sex={user.sex}
                        havePhoto={user.have_photo}
                      />
                    ))}
                </div>
              </div>
            )
        )}
    </div>
  );
};

export default ChatUsers;
