import { combineReducers } from "redux";
import { ADD_TWEETS } from "./actionsTypes";

const tweets = (tweets = [], { type, payload }) => {
  console.log("type", type, "payload", payload);
  switch (type) {
    case ADD_TWEETS:
      return payload.tweets;
    default:
      return tweets;
  }
};

export default combineReducers({
  tweets
});
