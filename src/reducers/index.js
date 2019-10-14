import { combineReducers } from "redux";
import { reducer } from "redux-form";
import departures from "./departures";

export default combineReducers({
  form: reducer,
  departures
});
