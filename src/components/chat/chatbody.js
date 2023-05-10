import React, { Component } from "react";
import "./chatbody.css";
import ChatList from "../chatList/chatList";
import ChatContent from "../chatContent/chatContent";
// import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <ChatList />
        <ChatContent />
        {/* <UserProfile /> */}
      </div>
    );
  }
}