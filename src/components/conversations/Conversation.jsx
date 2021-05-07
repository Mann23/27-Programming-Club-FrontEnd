import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default function Conversation({ conversation, anotherUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/users/" + anotherUser);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [anotherUser, conversation]);

  return (
    <div className="conversation">
      <span className="conversationName">{
      // user?.username
      anotherUser
      }</span>
    </div>
  );
}
