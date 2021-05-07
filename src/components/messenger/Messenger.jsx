import "./messenger.css";
import Conversation from "../conversations/Conversation";
import Message from "../message/Message";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sender, setSender] = useState(null);  

  const user = { username:localStorage.getItem('UserID')}
  const scrollRef = useRef();

  useEffect(() => {
    const getConversations = async () => {
      console.log("getC")
      try {
        const res = await axios.get("http://localhost:4000/chat/getConversation");
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, []);

  useEffect(() => {
    // console.log(conversations);
    // console.log(messages);
    console.log(currentChat);
  }, [currentChat])

  useEffect(() => {
    const getMessages = async () => {
      console.log("getM",currentChat?._id)
      try {
        const res = await axios.get("http://localhost:4000/chat/message/" + currentChat._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const getSender = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/" + currentChat.anotherUser);
        setSender(res.data.username);
      } catch (err) {
        console.log(err);
      }
    };

    if(currentChat)
     {
      getMessages();
      getSender();
     } 
  }, [currentChat]);

let repeat =  setInterval(
    async function()
    {
      // console.log("why this")
      if(currentChat && messages.length>0)
      {        
        const res = await axios.get("http://localhost:4000/chat/message/" + currentChat._id);

        if(res.data.length>messages.length)
        {
          const last = messages[messages.length - 1].text
          let i=res.data.length -1
          for(; i>-1; i--)
          {
            if(res.data[i].text===last)
              break;
          }
          i+=1
          const arrivalMessage= res.data.slice(i)
          
        setMessages([...messages, ...arrivalMessage]);
        // console.log(res.data.length,messages.length,last,arrivalMessage)
        // console.log("messages",messages)
        }          
      }
    }
    , 5000);
    useEffect(() => {
      return function cleanup() {
        clearInterval( repeat )
      };
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await axios.post("http://localhost:4000/chat/addMessage", message);
      setMessages([...messages, res.data]);
      // console.log("km che bhai",messages,res.data)
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.log(conversations)
  return (
    <>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            {
                conversations.map((c) => (
                <div onClick={() => setCurrentChat(c)}>
                  <Conversation conversation={c} anotherUser={c.anotherUser} />
                </div>
              ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={sender === user.username} />
                      {/* sender no username store karavi to thai jaai */}
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}