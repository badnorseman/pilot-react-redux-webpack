"use strict";
import "babel-core/polyfill";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import appState from "./reducers/app_state";
import Main from "./containers/main";
import "./app.css";

injectTapEventPlugin();

window.React = React;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

const appStore = createStoreWithMiddleware(appState);

React.render(
  <Provider store={appStore}>
    {() => <Main/>}
  </Provider>,
  document.getElementById("app")
);
