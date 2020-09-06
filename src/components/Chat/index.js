import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <div className="chat">
      <Avatar className="chat__image" src={profilePic} />
      <div className="chat__detail">
        <h2 className="chat__name">{name}</h2>
        <p className="chat__message">{message}</p>
      </div>
      <p className="chat__timestamp">{timestamp}</p>
    </div>
  );
}

export default Chat;
