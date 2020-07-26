// import { createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import reducer from "./bugs";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default function () {
  // const store = createStore(reducer, devToolsEnhancer({ trace: true }));
  // return store;
  return configureStore({ reducer });
}
