import React, { Component,createRef} from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./chatItem";


export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://icon-library.com/images/female-user-icon/female-user-icon-24.jpg",
      type: "",
      msg: "Hi everyone!, What's Up?",
    },
    {
      key: 2,
      image:
        "https://img.myloview.com.br/adesivos/user-icon-human-person-symbol-avatar-login-sign-700-259624279.jpg",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://img.myloview.com.br/adesivos/user-icon-human-person-symbol-avatar-login-sign-700-259624279.jpg",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://icon-library.com/images/female-user-icon/female-user-icon-24.jpg",
      type: "",
      msg: "I'm good!",
    },
    {
      key: 5,
      image:
        "https://img.myloview.com.br/adesivos/user-icon-human-person-symbol-avatar-login-sign-700-259624279.jpg",
      type: "other",
      msg: "What are you up to these days?",
    },
    {
      key: 6,
      image:
        "https://icon-library.com/images/female-user-icon/female-user-icon-24.jpg",
      type: "",
      msg: "Nothing much, just looking for internships.",
    },
    {
      key: 7,
      image:
        "https://img.myloview.com.br/adesivos/user-icon-human-person-symbol-avatar-login-sign-700-259624279.jpg",
      type: "other",
      msg: "Call me. I will hook you up with someone I know.",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
        document.getElementById("sendMsgBtn").click();
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://icon-library.com/images/female-user-icon/female-user-icon-24.jpg",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://p.kindpng.com/picc/s/154-1546024_ehr-my-team-team-png-icon-transparent-png.png"
              />
              <p>Test Group</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}componentDidMount
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}