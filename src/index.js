import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

import FetchTweets from "./FetchTweets";
import Tweets from "./Tweets";

import "./styles.scss";

const store = createStore(reducer, applyMiddleware(thunk));

const Application = store => {
  return (
    <div className="Application">
      <h1>Fake Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement
);