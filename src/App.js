import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Campaigns from "./components/campaigns/Campaigns";
import CreateCampaignForm from "./components/campaigns/CreateCampaignForm";
import Layout from "./components/layout";
import Dashboard from "./components/dashboard/Dashboard";
import Segments from "./components/segments/Segments";
import CampaignDetails from "./components/campaigns/CampaignDetails";
import EditCampaign from "./components/campaigns/EditCampaign";

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
              <Route
                exact
                path="/create-campaign"
                component={CreateCampaignForm}
              />
              <Route
                exact
                path="/view-campaign/:id"
                component={CampaignDetails}
              />
              <Route exact path="/edit-campaign/:id" component={EditCampaign} />
            </Fragment>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
