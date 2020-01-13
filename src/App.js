import React, { Component, Fragment } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Campaigns from "./components/campaigns/Campaigns";
import CreateCampaignForm from "./components/campaigns/CreateCampaignForm";
import Layout from "./components/layout";
import Segments from "./components/segments/Segments";
import CampaignDetails from "./components/campaigns/CampaignDetails";
import EditCampaign from "./components/campaigns/EditCampaign";
import CreateSegmentForm from "./components/segments/CreateSegmentForm";
import EditSegment from "./components/segments/EditSegment";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Fragment>
              <Redirect exact from="/" to="campaigns" />
              <Route exact path="/campaigns" component={Campaigns} />
              <Route exact path="/segments" component={Segments} />
              <Route exact path="/campaigns/create" component={CreateCampaignForm} />
              <Route exact path="/segments/create" component={CreateSegmentForm} />
              <Route
              exact
                path="/campaigns/details/:id"
                component={CampaignDetails}
              />
              <Route exact path="/segments/edit/:id" component={EditSegment} />
              <Route exact path="/campaigns/edit/:id" component={EditCampaign} />
            </Fragment>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
