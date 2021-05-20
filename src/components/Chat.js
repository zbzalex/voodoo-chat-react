import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatUsers from "./ChatUsers";
import Axios from "axios";
import ChatToolbar from "./ChatToolbar";
import View from "./View";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import Popup from "./Popup";

const Chat = () => {
  const [user, setUser] = useState({
    id: 2,
    nick: "Admin",
    canonNick: "admin",
    htmlNick: '<font color="#0b8080">test</font>',
    gender: 0,
    class: 0,
  });

  const [users, setUsers] = useState();
  const [countUsers, setCountUsers] = useState(0);

  const [messages, setMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);

  const [text, setText] = useState();
  const [to, setTo] = useState();

  const [popup, setPopup] = useState();

  useEffect(() => {
    setInterval(() => {
      Axios.get(
        "http://localhost/getOnlineUsers?api_key=test&session=test&room=1"
      ).then(
        (response) => {
          if (response.status >= 200 && response.status < 300) {
            setUsers(response.data.data.users);
            setCountUsers(response.data.data.count);
          }
        },
        () => {
          // ...
        }
      );
    }, 1000);
  }, []);

  return (
    <View popup={popup} onPopupClick={() => setPopup(null)}>
      <ChatToolbar />
      <div className="ChatBody">
        
        <div className="ChatContent">
          <div className="ChatContent__Col" style={{
            height: "70%"
          }}>
            
            <ChatMessages messages={messages} />
          </div>
          <div className="ChatContent__Col" style={{
            height: "30%"
          }}>
            <div className="ChatHeader"></div>
            <ChatMessages messages={privateMessages} />
            <ChatInput
              onChangeText={(value) => {
                setText(value);
              }}
              onChangeTo={(value) => {
                setTo(value);
              }}
              onSubmit={() => {
                // submitted
                console.log(`submitted`);

                if (text.trim().length === 0) {
                  return;
                }

                setMessages([
                  ...messages,
                  {
                    id: messages.length + 1,
                    from: user.nick,
                    fromId: user.id,
                    fromHtmlNick: user.htmlNick,
                    date: new Date(),
                    text,
                    to,
                  },
                ]);
              }}
              onSubmitPrivate={() => {
                // submitted
                console.log(`submitted private`);

                if (text.trim().length === 0) {
                  return;
                }

                setPrivateMessages([
                  ...privateMessages,
                  {
                    id: messages.length + 1,
                    from: user.nick,
                    fromId: user.id,
                    fromHtmlNick: user.htmlNick,
                    date: new Date(),
                    text,
                    to,
                  },
                ]);
              }}
            />
          </div>
        </div>

        <ChatUsers
          count={countUsers}
          users={users}
          onTitleClick={(i) => {
            console.log(i);
          }}
          onNickClick={(nick) => {
            //setTo(nick)
          }}
          onInfoClick={(id) => {
            setPopup(<Popup>asd</Popup>);
          }}
        />
      </div>
    </View>
  );
};

export default Chat;
