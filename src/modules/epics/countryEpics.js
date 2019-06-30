import { mergeMap, map, filter, toArray, merge } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ofType } from "redux-observable";
import {
  FETCH_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  FILTERED_COUNTRY,
  FILTERED_COUNTRY_SUCCESS,
  DELETE_COUNTRY,
  DELETE_COUNTRY_SUCCESS,
  SORT_COUNTRY,
  SORT_COUNTRY_SUCCESS
} from "../root";
import { from } from "rxjs";

export const fetchCountryEpic = action$ =>
  action$.pipe(
    ofType(FETCH_COUNTRY),
    mergeMap(action =>
      ajax
        .getJSON(
          "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
        )
        .pipe(
          map(response => ({
            type: FETCH_COUNTRY_SUCCESS,
            countryData: response
          }))
        )
    )
  );

export const filteredCountryEpic = (action$, store) =>
  action$.pipe(
    ofType(FILTERED_COUNTRY),
    mergeMap(action =>
      from(store.value.country.countryData).pipe(
        filter(data => {
          const regExp = new RegExp(`.*${store.value.input.keyword}.*`, "i");

          return (
            regExp.test(data.name) ||
            regExp.test(data.alpha2Code) ||
            regExp.test(data.callingCodes[0]) ||
            regExp.test(data.capital) ||
            regExp.test(data.region)
          );
        }),
        toArray(),
        map(filteredData => ({
          type: FILTERED_COUNTRY_SUCCESS,
          filteredData
        }))
      )
    )
  );

export const deleteCountryEpic = (action$, store) =>
  action$.pipe(
    ofType(DELETE_COUNTRY),
    mergeMap(action =>
      from(store.value.country.countryData).pipe(
        filter(countryData => countryData !== action.willRemoveCountryData),
        toArray(),
        map(refreshedCountryData => ({
          type: DELETE_COUNTRY_SUCCESS,
          refreshedCountryData
        }))
      )
    )
  );

export const sortCountryEpic = (action$, store) =>
  action$.pipe(
    ofType(SORT_COUNTRY),
    map(action => ({
      type: SORT_COUNTRY_SUCCESS,
      sortedCountryData: [...store.value.country.countryData].sort((a, b) => {
        if (action.columnName === "callingCodes") {
          if (a.callingCodes[0] < b.callingCodes[0]) {
            return action.rule ? -1 : 1;
          }
          if (a.callingCodes[0] > b.callingCodes[0]) {
            return action.rule ? 1 : -1;
          }
          return 0;
        }
        if (a[action.columnName] < b[action.columnName]) {
          return action.rule ? -1 : 1;
        }
        if (a[action.columnName] > b[action.columnName]) {
          return action.rule ? 1 : -1;
        }
        return 0;
      })
    }))
  );
