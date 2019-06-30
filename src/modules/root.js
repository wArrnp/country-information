import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import country from "./country";
import input from "./input";
import {
  FETCH_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  ADD_COUNTRY,
  FILTERED_COUNTRY,
  FILTERED_COUNTRY_SUCCESS,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  SORT_COUNTRY,
  SORT_COUNTRY_SUCCESS
} from "./country";
import { SEARCH_INPUT } from "./input";

export default combineReducers({ country, input, form: formReducer });

export {
  FETCH_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  ADD_COUNTRY,
  FILTERED_COUNTRY,
  FILTERED_COUNTRY_SUCCESS,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  SORT_COUNTRY,
  SORT_COUNTRY_SUCCESS,
  SEARCH_INPUT
};
