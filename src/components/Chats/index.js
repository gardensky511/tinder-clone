import React from "react";
import Chat from "../Chat";
import "./style.css";

function Chats() {
  return (
    <div className="Chats">
      <Chat
        name="Jun.K"
        message="Hows it going?"
        timestamp="10 minute ago"
        profilePic="https://6.viki.io/image/a8f6a333dc374b29a05885f54e8cb91b.jpeg?s=900x600&e=t"
      />
      <Chat
        name="Taec"
        message="Hello!"
        timestamp="17 minute ago"
        profilePic="https://pbs.twimg.com/media/CqyTfsFUMAACZ5D.jpg"
      />
    </div>
  );
}

export default Chats;
