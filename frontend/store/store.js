import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/root_reducer";

const middlewarers = [thunk, logger];

export const store = createStore(rootReducer, {}, applyMiddleware(...middlewarers));
export const persistor = persistStore(store);

export default { store, persistor };
// export const configureStore = (preloadedState = {}) =>
//   createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
