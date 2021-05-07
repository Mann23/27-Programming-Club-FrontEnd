import React, { Component ,useState,useEffect} from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import axios from 'axios'



axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const ChatBody = () => {

  const [clickedId,setClickedId] = useState("")

  useEffect(() => {
   axios.post(`${process.env.REACT_APP_URL}/chat/getFriendsChat`,{email:"201801035@daiict.ac.in"}).then((res)=>{
     console.log(res)
   })
  }, [])

    return (
      <div className="main__chatbody">
        <ChatList changeId={setClickedId}/>
        <ChatContent ID={clickedId}/>
      </div>
    );
}

export default ChatBody