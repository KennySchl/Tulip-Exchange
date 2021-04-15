import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/root";
import { store, persistor } from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: { users: window.currentUser },
  //     session: { currentUserId: window.currentUser.id },
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }
  ReactDOM.render(<Root store={store} persistor={persistor} />, document.getElementById("root"));
});
// window.store = configureStore();
window.store = store
