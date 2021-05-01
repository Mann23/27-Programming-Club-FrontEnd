import React, { Component ,useState} from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";

const ChatBody = () => {

  const [clickedId,setClickedId] = useState("XXXXXX")

    return (
      <div className="main__chatbody">
        <ChatList changeId={setClickedId}/>
        <ChatContent ID={clickedId}/>
      </div>
    );
}

export default ChatBody