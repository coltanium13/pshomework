import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import Campaigns from "./components/campaigns/Campaigns";
import CampaignsForm from "./components/campaigns/CampaignForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <CampaignsForm />
          <hr />
          <Campaigns />
        </div>
      </Provider>
    );
  }
}

export default App;
