import React from "react";
import "./App.css";
import ChatBody from "./components/chat/chatBody/ChatBody";

localStorage.setItem('UserID',201801454);

function App() {
  return (
    <div className="__main">
      <ChatBody />
    </div>
  );
}

export default App;