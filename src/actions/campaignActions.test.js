import React from "react";
import { fetchCampaigns, getCampaignById } from "./campaignActions";
import sinon from "sinon";
import { FETCH_CAMPAIGNS, GET_CAMPAIGN } from "./types";
import data from "../reducers/data/campaigns.json";

describe("Campaign Actions", () => {
  const stubs = { dispatch: sinon.stub() };

  //resets each stub after each test is ran
  afterEach(() => {
    Object.values(stubs).forEach(stub => {
      stub.reset();
    });
  });

  describe("fetchCampaigns()", () => {
    it("should call dispatch with campaign data", () => {
      //act
      fetchCampaigns()(stubs.dispatch);
      //assert
      expect(stubs.dispatch.called).toBeTruthy();
      expect(stubs.dispatch.callCount).toBe(1);
      expect(stubs.dispatch.firstCall.args.length).toBe(1);
      expect(stubs.dispatch.firstCall.args[0]).toEqual({
        type: FETCH_CAMPAIGNS,
        payload: data.campaigns
      });
    });
  });

  describe("getCampaignById()", () => {
    it("should call dispatch with campaign id", () => {
      //act
      getCampaignById()(stubs.dispatch);
      //assert
      expect(stubs.dispatch.called).toBeTruthy();
      expect(stubs.dispatch.callCount).toBe(1);
      expect(stubs.dispatch.firstCall.args.length).toBe(1);
      expect(stubs.dispatch.firstCall.args[0]).toEqual({
        type: GET_CAMPAIGN,
        payload: data.campaigns[0].dispatch
      });
    });
  });
});
