import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./style.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Jun.K",
      image:
        "https://6.viki.io/image/a8f6a333dc374b29a05885f54e8cb91b.jpeg?s=900x600&e=t",
      message: "What's up!"
    },
    {
      name: "Jun.K",
      image:
        "https://6.viki.io/image/a8f6a333dc374b29a05885f54e8cb91b.jpeg?s=900x600&e=t",
      message: "Hows it going?"
    },
    {
      message: "Hello, How are you?"
    }
  ]);

  const handleSend = event => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH JUN.K ON 08/12/20
      </p>
      {messages.map(message =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <from className="chatScreen__input">
          <input
            value={input}
            onChange={event => setInput(event.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </from>
      </div>
    </div>
  );
}

export default ChatScreen;
