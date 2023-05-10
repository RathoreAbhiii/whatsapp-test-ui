import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/nav';
import Chatbody from './components/chat/chatbody';

class App extends Component {
  render() {
    return (
      <div className="main">
      <Nav />
      <Chatbody />
      </div>
    );
  }
}

export default App;
