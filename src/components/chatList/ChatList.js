import React, { Component , createRef} from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  messagesEndRef = createRef(null);
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
    console.log(typeof this.props.setClickedId)
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
                changeId={this.props.changeId}
              />
            );
          })}
        </div>
      </div>
    );
  }
}