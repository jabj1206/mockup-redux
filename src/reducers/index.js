import { combineReducers } from "redux";
import {reducer} from 'redux-form';
import list from './list'
import departures from './departures'

export default combineReducers ({
  list,
  form: reducer,
  departures
})