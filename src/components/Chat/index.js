import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__detail">
          <h2 className="chat__name">{name}</h2>
          <p className="chat__message">{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
