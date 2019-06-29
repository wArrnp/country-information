import axios from 'axios';

const FETCH_COUNTRY = 'country/FETCH_COUNTRY';
const ADD_COUNTRY = 'country/ADD_COUNTRY';
const FILTERED_COUNTRY = 'country/FILTERED_COUNTRY';
const DELETE_COUNTRY = 'country/DELETE_COUNTRY';
const SORT_COUNTRY = 'country/SORT_COUNTRY';

const initialState = {
  countryData: [],
  filteredCountryData: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRY:
      return {
        ...state,
        countryData: action.countryData,
        filteredCountryData: action.countryData,
      };
    case ADD_COUNTRY:
      return {
        countryData: [...state.countryData, action.newCountryData],
      };
    case FILTERED_COUNTRY:
      return { ...state, filteredCountryData: action.filteredData };
    case DELETE_COUNTRY:
      return {
        ...state,
        countryData: action.newCountryData,
        filteredCountryData: action.newFilteredCountryData,
      };
    case SORT_COUNTRY:
      return {
        ...state,
        countryData: action.sortedCountryData,
      };
    default:
      return state;
  }
}

export const fetchCountry = countryData => ({
  type: FETCH_COUNTRY,
  countryData,
});

export const fetchCountryThunk = () => dispatch => {
  return axios
    .get(
      'https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes',
    )
    .then(response => {
      dispatch(fetchCountry(response.data));
    })
    .catch(err => {
      console.log(err);
    });
};

export const addCountry = newCountryData => ({
  type: ADD_COUNTRY,
  newCountryData,
});

export const filteredCountry = filteredData => ({
  type: FILTERED_COUNTRY,
  filteredData,
});

export const filteredCountryThunk = () => (dispatch, getState) => {
  const { country, input } = getState();
  const regExp = new RegExp(`.*${input.keyword}.*`, 'i');
  const filteredData = country.countryData.filter(data => {
    return (
      regExp.test(data.name) ||
      regExp.test(data.alpha2Code) ||
      regExp.test(data.callingCodes[0]) ||
      regExp.test(data.capital) ||
      regExp.test(data.region)
    );
  });
  return dispatch(filteredCountry(filteredData));
};

export const deleteCountry = (newCountryData, newFilteredCountryData) => ({
  type: DELETE_COUNTRY,
  newCountryData,
  newFilteredCountryData,
});

export const deleteCountryThunk = index => (dispatch, getState) => {
  const { country } = getState();
  const countryDataIndex = country.countryData.findIndex(
    data => data === country.filteredCountryData[index],
  );
  const newCountryData = [
    ...country.countryData.slice(0, countryDataIndex),
    ...country.countryData.slice(countryDataIndex + 1),
  ];
  const newFilteredCountryData = [
    ...country.filteredCountryData.slice(0, index),
    ...country.filteredCountryData.slice(index + 1),
  ];
  return dispatch(deleteCountry(newCountryData, newFilteredCountryData));
};

export const sortCountry = sortedCountryData => ({
  type: SORT_COUNTRY,
  sortedCountryData,
});

export const sortCountryThunk = (columnName, rule) => (dispatch, getState) => {
  const { country } = getState();
  console.log(columnName, rule);
  const sortedCountryData = country.countryData.sort((a, b) => {
    if (columnName === 'callingCodes') {
      if (a.callingCodes[0] < b.callingCodes[0]) {
        return rule ? -1 : 1;
      }
      if (a.callingCodes[0] > b.callingCodes[0]) {
        return rule ? 1 : -1;
      }
      return 0;
    }
    if (a[columnName] < b[columnName]) {
      return rule ? -1 : 1;
    }
    if (a[columnName] > b[columnName]) {
      return rule ? 1 : -1;
    }
    return 0;
  });

  return dispatch(sortCountry(sortedCountryData));
};
