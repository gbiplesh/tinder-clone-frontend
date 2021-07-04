import React from 'react';
import './App.css';
import Header from "./Header.js";
import Chats from "./Chats.js";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards.js';
import SwipeButtons from "./SwipeButtons.js";

function App() {
  return (
    // BEM class naming convention
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/chat/:person">
              <Header backButton="/chat" />
              <ChatScreen />
            </Route>
            <Route path="/chat">
              <Header backButton="/" />
              <Chats />
            </Route>
            <Route path="/">
              <Header />
              <TinderCards></TinderCards>
              <SwipeButtons />
            </Route>
              {/* ChatScreens */}
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
