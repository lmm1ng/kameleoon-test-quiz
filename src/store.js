import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
