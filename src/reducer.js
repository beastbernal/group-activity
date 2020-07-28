import { combineReducers } from "redux";
import { ADD_TWEETS, LOAD_PROFILE } from "./actionsTypes";

const tweets = (tweets = [], { type, payload }) => {
  console.log("type", type, "payload", payload);
  switch (type) {
    case ADD_TWEETS:
      return payload.tweets;
    case LOAD_PROFILE:
      return tweets;
    default:
      return tweets;
  }
};

const profiles = (profiles = [], { type, payload }) => {
  console.log("type", type, "payload", payload);
  switch (type) {
    case LOAD_PROFILE:
      return payload.profile;
    default:
      return profiles;
  }
};

export default combineReducers({
  tweets,
  profiles
});
