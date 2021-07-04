import React from 'react';
import './chats.css';
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Ben"
        message="Hi How are you?"
        timestamp="3 mins ago"
        profilePic="#"
      />
      <Chat
        name="Ten"
        message="Hi How are you?"
        timestamp="3 mins ago"
        profilePic="#"
      />
      </div>
  )
}

export default Chats;
