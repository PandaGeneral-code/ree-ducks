import { combineReducers, createStore } from "redux";

import appReducer from "./modules/app";

export const createCleanStore = () =>
  createStore(combineReducers({ app: appReducer }));
