import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";

import { App } from "./app";

export const Root = ({ store, persistor }) => (
  <Provider store={store}>
    <HashRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </HashRouter>
  </Provider>
);
