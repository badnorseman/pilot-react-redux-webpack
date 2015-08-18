"use strict";
import "babel-core/polyfill";
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Main from "./containers/Main";
import "./app.css";

const store = configureStore();

injectTapEventPlugin();

window.React = React;

React.render(
  <Provider store={store}>
    {() => <Main/>}
  </Provider>,
  document.getElementById("app")
);
