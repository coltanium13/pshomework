import React from "react";
import { shallow } from "enzyme";
import CampaignTable from "./CampaignTable";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import data from "../../reducers/data/campaigns.json";
const mockStore = configureStore();

const store = mockStore({
  campaigns: [],
  campaign: {}
});

describe("CampaignTable", () => {
  describe("In General", () => {
    it("renders campaign table without crashing", () => {
      const wrapper = shallow(
        <Provider store={store}>
          <CampaignTable campaigns={data.campaigns} status="Preview" />
        </Provider>
      );
      expect(wrapper.length).toEqual(1);
    });
  });
});
