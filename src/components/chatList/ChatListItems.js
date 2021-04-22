import React, { Component, createRef } from "react";

import "../chatContent/chatContent.css"

export default class ChatListItems extends Component {
  messagesEndRef = createRef(null);
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    localStorage.setItem('ClickedID',this.props.UserID);
  };

  render() {
    return (
      <div
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
  
        <div className="userMeta">
          <p>{this.props.UserID}</p>
        </div>
      </div>
    );
  }
}
