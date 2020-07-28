import { ADD_TWEETS } from "./actionsTypes";
import { LOAD_PROFILE } from "./actionsTypes";

export const fetchTweets = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response => {
        console.log("response", response);
        dispatch(addTweets(response));
      });
  };
};

export const addTweets = tweets => ({
  type: ADD_TWEETS,
  payload: { tweets }
});

export const fetchGithub = (username) => {
  return dispatch => {
    fetch('https://api.github.com/users/'+ username +'/repos?sort=updated')
      .then(response => response.json())
      .then(response => {
        console.log("response", response);
        dispatch(addProfile(response));
      });
  };
};

export const addProfile = profile => ({
  type: LOAD_PROFILE,
  payload: { profile }
});
