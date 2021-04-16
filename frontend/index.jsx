import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/root";
import { configureStore } from "./store/store";
// import { store, persistor } from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: { users: window.currentUser, stocks: window.stocks },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById("root"));
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
window.store = configureStore();
// window.store = store
