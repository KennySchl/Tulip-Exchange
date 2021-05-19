import { combineReducers } from "redux";

import users from "./users_reducer";
import stocks from "./stocks_reducer";
import watchlists from "./watchlists_reducer"

export default combineReducers({
  users,
  stocks,
  watchlists
});
