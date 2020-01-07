import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postActions";

function Posts() {
  const dispatch = useDispatch();

  const { items, item } = useSelector(state => ({
    ...state.posts
  }));

  //TODO: figure out a better way
  //to fake adding a new item to the beginning

  useEffect(() => {
    dispatch(fetchPosts(item));
  }, [item]);

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  //}

  const postItems = items.map((post, index) => (
    <div key={index}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
}

Posts.propTypes = {
  // fetchPosts: PropTypes.func.isRequired,
  // posts: PropTypes.array.isRequired,
  // newPost: PropTypes.object
};

export default Posts;
