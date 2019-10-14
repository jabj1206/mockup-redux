import { combineReducers } from "redux";
import {reducer} from 'redux-form';
import departures from './departures'
import search from './search'

export default combineReducers ({
  form: reducer,
  departures,
  search
})