import { createStore, applyMiddleware } from "redux";
// import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

const middlewares = [thunk];

// export const store = createStore(rootReducer, {}, applyMiddleware(...middlewarers));
// export const persistor = persistStore(store);

// export default { store, persistor };

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, applyMiddleware(...middlewares));
