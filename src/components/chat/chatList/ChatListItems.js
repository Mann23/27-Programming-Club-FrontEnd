import React, { Component } from "react";
import ChatContent from "../chatContent/ChatContent";

export default class ChatListItems extends Component {

  state = {data: null}
  
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    e.preventDefault();
    localStorage.setItem('ClickedID',this.props.UserID);
    console.log(this.props.UserID);
    //this.props.update.selectID(this.props.UserID);
    //return <ChatContent update = {this.props.UserID}/>
    this.setState({data: this.props.UserID})
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