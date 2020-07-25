import React from "react";
import { connect } from "react-redux";
import { fetchTweets } from "./actions";

const FetchTweets = ({ fetchTweets }) => {
  console.log("fetchTweets", fetchTweets);
  return <button onClick={fetchTweets}>Fetch Tweets</button>;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets() {
      dispatch(fetchTweets());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FetchTweets);
