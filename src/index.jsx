import 'react-app-polyfill/ie9';
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import Store from "./store/store";

const store = Store();

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
