import { combineEpics } from "redux-observable";
import {
  fetchCountryEpic,
  filteredCountryEpic,
  deleteCountryEpic,
  sortCountryEpic
} from "./countryEpics";

const rootEpic = combineEpics(
  fetchCountryEpic,
  filteredCountryEpic,
  deleteCountryEpic,
  sortCountryEpic
);

export default rootEpic;
