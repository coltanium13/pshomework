import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignById } from "../../actions/campaignActions";

const EditCampaign = ({ match }) => {
  const campaignId = match.params.id;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Camp Edit Effect!!");
    dispatch(getCampaignById(campaignId));
  }, [dispatch, campaignId]);

  const { campaign } = useSelector(state => ({
    ...state.campaigns
  }));

  return (
    <Fragment>
      <div>
        Edit Campaign {campaign.name}: {match.params.id}!
      </div>
    </Fragment>
  );
};

export default EditCampaign;
