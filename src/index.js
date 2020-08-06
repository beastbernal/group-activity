import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducer";

// import FetchTweets from "./FetchTweets";
import FetchGithub from "./FetchGithub";
// import Tweets from "./Tweets";

import {  Card, Elevation} from "@blueprintjs/core";
 


import "./styles.scss";
import "normalize.css/normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import Profiles from "./Profiles";


const store = createStore(reducer, applyMiddleware(thunk));

const Application = store => {
  return (
    <>
    {/* <div className="Application">
      <Button intent="success" text="button content"  />
      <h1>Fake Tweet Stream</h1>
      <FetchTweets />
      <Tweets />
    </div> */}
    <Card interactive={true} elevation={Elevation.TWO}>
        <div className="bp3-progress-bar bp3-intent-success">
          <div className="bp3-progress-meter"></div>
        </div>
        <h5><a href="#">Obteniendo los repos por username:</a></h5>
        <FetchGithub/>
        <Profiles/>
        {/* <Button>Submit</Button> */}
    </Card>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  rootElement
);