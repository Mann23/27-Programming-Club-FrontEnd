import React, { Component, createRef } from "react";
import ChatListItems from "../chatList/ChatListItems";
import "./chatContent.css";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      type: "",
      msg: "Hi, How are you?",
    },
    {
      key: 2,
      type: "other",
      msg: "I am fine.",
    }
  ];

  constructor(props) {
    super(props); 
    this.state = {
      chat: this.chatItms,
      msg: "",
      changedID: null,
    };
    this.selectID = this.selectID.bind(this);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13){
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();

    window.addEventListener('storage',e => this.setState({value: localStorage.getItem('Clicked')}))
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  handleclick = (e) => {
    if (this.state.msg !== "") {
      this.chatItms.push({
        key: 1,
        type: "",
        msg: this.state.msg,
      });
      this.setState({ chat: [...this.chatItms] });
      this.scrollToBottom();
      this.setState({ msg: "" });
    }
  }

  selectID = (id) => {
    this.setState({changedID:id})
    console.log("hi");
  }

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              {this.props.data}
            </div>
          </div>
        </div>

        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm) => {
              return (
                <ChatItem
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button onClick={this.handleclick} id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}