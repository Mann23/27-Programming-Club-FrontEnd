import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  CoreMemberList = [
    {
      UserID: "201801453",
    },
    {
      UserID: "201801454",
    },
    {
      UserID: "201801455",
    }
  ];

  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>User List</h2>
        </div>
        <div className="chatlist__items">
          {this.CoreMemberList.map((item) => {
            return (
              <ChatListItems
                UserID={item.UserID}
              />
            );
          })}
        </div>
      </div>
    );
  }
}