import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Campaigns from "./components/campaigns/Campaigns";
import CampaignForm from "./components/campaigns/CampaignForm";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard/Dashboard";
import Segments from "./components/segments/Segments";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Fragment>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/segments" component={Segments} />
              <Route exact path="/campaigns" component={Campaigns} />
              <Route exact path="/create-campaign" component={CampaignForm} />
            </Fragment>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
