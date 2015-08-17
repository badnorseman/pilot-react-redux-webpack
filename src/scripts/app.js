"use strict";
import React from "react";
import "babel-core/polyfill";
import { createStore } from "redux";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";
import appReducer from "./reducers/app_reducer";
import Main from "./containers/main";
import "./app.css";

let appStore = createStore(appReducer);

window.React = React;

injectTapEventPlugin();

React.render(
  <Provider store={appStore}>
    {() => <Main/>}
  </Provider>,
  document.getElementById("app")
);
