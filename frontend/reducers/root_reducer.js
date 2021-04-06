import { combineReducers } from "redux";

import entities from "./entities_reducer";
import { session } from "./session_reducer";

export default rootReducer = combineReducers({
  entities,
  session,
});
