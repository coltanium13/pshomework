import { FETCH_CAMPAIGNS, NEW_CAMPAIGN } from "./types";
import _ from "lodash";

export const fetchCampaigns = newItem => dispatch => {
  console.log(JSON.stringify("newItem: " + JSON.stringify(newItem)));
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => res.json())
    .then(posts => {
      if (!_.isEmpty(newItem)) {
        console.log("adding new item: " + JSON.stringify(newItem));
        console.log("...posts: " + JSON.stringify(posts));
        posts.unshift(newItem);
      }
      return posts;
    })
    .then(allPosts => {
      console.log("allPosts" + JSON.stringify(allPosts));
      dispatch({
        type: FETCH_CAMPAIGNS,
        payload: allPosts
      });
    });
};

export const createCampaign = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_CAMPAIGN,
        payload: post
      })
    );
};
