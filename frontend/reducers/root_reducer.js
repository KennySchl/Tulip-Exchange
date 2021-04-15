import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import entities from "./entities_reducer";
import session from "./session_reducer";
import errors from "./errors_reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entities", "session"],
};

const rootReducer = combineReducers({
  entities,
  session,
  errors,
});


export default persistReducer(persistConfig, rootReducer);
