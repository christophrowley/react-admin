import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import configureStore from "./redux/configure-store";

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

render(<App />, document.getElementById("react-admin"));
