import React, { useState } from 'react'
import './chatScreen.css';
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Ben",
      image: "",
      message: "hi",
    },
    {
      name: "Ben",
      image: "",
      message: "hello",
    }, 
    {
      message: "hey how are you?",
    },
  ]);

  const handleSend = e => {
    e.preventDefault(); // prevents refreshing page
    setMessages([...messages, {message: input }]);
    setInput("");
  };

  return (

    <>
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH BEN ON 10/10/2020</p>
      {messages.map((message) => (
        message.name ? (
        <div className="chatScreen__message">
          <Avatar 
          className="chatScreen_image"
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
      ))}
    </div>

        <form className="chatScreen__input">
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          placeholder="Type a message..." 
          type="text" 
          />
          <button 
          className="chatScreen__inputButton"
          type="submit"
          onClick={handleSend}
          >SEND</button>
        </form>
  </>
  );
}

export default ChatScreen;
