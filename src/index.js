import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store";
import { Provider } from "react-redux";

import Table from "./Containers/Table";
import SearchInput from "./Containers/SearchInput";

import "./index.css";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <SearchInput />
    <Table />
  </Provider>,
  document.getElementById("root")
);
