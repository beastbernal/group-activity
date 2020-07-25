import { ADD_TWEETS } from "./actionsTypes";

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
