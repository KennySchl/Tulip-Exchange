import React from "react";
import ReactDOM from "react-dom";
import { Root } from "./components/root";
import { configureStore } from "./store/store";
import { fetchStockAPI } from "./util/stocks_api_util";
document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: { users: window.currentUser },
      session: { currentUserId: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});
window.store = configureStore();


console.log(fetchStockAPI('aapl').then(()=>console.log('yes')).fail(()=> console.log('omg')));