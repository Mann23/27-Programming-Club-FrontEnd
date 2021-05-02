import React, { Component , createRef} from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import axios from "axios"
export default class ChatList extends Component {
  messagesEndRef = createRef(null);
  CoreMemberList = []
  //   {
  //     UserID: "201801453",
  //   },
  //   {
  //     UserID: "201801454",
  //   },
  //   {
  //     UserID: "201801455",
  //   }
  // ];

  constructor(props) {
    super(props);
    this.state = {
      CoreMemberList:this.CoreMemberList
    };
  }

  componentDidMount() {
    axios
            .get("http://localhost:4000/core",
            {
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem('accessToken')
                }
            })
            .then((res) => {
                console.log(res);
                res =res.data.map(member=> {
                 return { UserID:member.email.split("@")[0]}
                })
                console.log(this.state)
                console.log(res)
                this.setState({ CoreMemberList: [...res] });
                console.log(this.state)
            })
            .catch((err) => {
                console.log(err);
            });
  }


  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2>User List</h2>
        </div>
        <div className="chatlist__items">
          {this.state.CoreMemberList.map((item) => {
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