import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow, mount } from "enzyme";
import Campaigns from "./Campaigns";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore();

const store = mockStore({
  campaigns: [],
  campaign: {}
});

describe("Campaigns", () => {
  describe("In General", () => {
    it("renders campaigns without crashing", () => {
      const wrapper = shallow(
        <Provider store={store}>
          <Campaigns />
        </Provider>
      );
      //console.log("wrapper: ", wrapper.debug());
      expect(wrapper.length).toEqual(1);
    });
  });
});
