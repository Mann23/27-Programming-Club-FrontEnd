import React, { Component } from "react";

export default class ChatItem extends Component {
  render() {
    return (
      <div className={`chat__item ${this.props.user ? this.props.user : ""}`}>
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
        </div>  
      </div>
    );
  }
}