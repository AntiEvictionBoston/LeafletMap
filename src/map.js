import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from "react-router";

import StoryMap from "components/story_map";
import eastBostonStories from "./data/east_boston_stories";
import updateMapState from "./reducers/reducers";
import * as actions from "./actions/actions";
import awesomeMarkers from "./util/leaflet.awesome-markers";
require("./stylesheets/main.scss");

// check for different divs, render the appropriate map
let domElement = document.getElementById('east_boston_tenant_association_map');
if (domElement) {
  let store = createStore(updateMapState);

  store.dispatch(actions.setStories(eastBostonStories));
  store.dispatch(actions.setFocusedStory(0));
  store.dispatch(actions.setZoomLevel(14));
  store.dispatch(actions.setCenter([42.37, -71.03]));

  awesomeMarkers(this, document);

  render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={StoryMap}>
          <Route path="/:address" />
        </Route>
      </Router>
    </Provider>,
    domElement
  );
}
