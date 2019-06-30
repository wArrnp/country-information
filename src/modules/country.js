export const FETCH_COUNTRY = "country/FETCH_COUNTRY";
export const FETCH_COUNTRY_SUCCESS = "country/FETCH_COUNTRY_SUCCESS";
export const ADD_COUNTRY = "country/ADD_COUNTRY";
export const FILTERED_COUNTRY = "country/FILTERED_COUNTRY";
export const FILTERED_COUNTRY_SUCCESS = "country/FILTERED_COUNTRY_SUCCESS";
export const DELETE_COUNTRY = "country/DELETE_COUNTRY";
export const DELETE_COUNTRY_SUCCESS = "country/DELETE_COUNTRY_SUCCESS";
export const SORT_COUNTRY = "country/SORT_COUNTRY";
export const SORT_COUNTRY_SUCCESS = "country/SORT_COUNTRY_SUCCESS";

const initialState = {
  countryData: [],
  filteredCountryData: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        countryData: action.countryData,
        filteredCountryData: action.countryData
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countryData: [action.newCountryData, ...state.countryData]
      };
    case FILTERED_COUNTRY_SUCCESS:
      return { ...state, filteredCountryData: action.filteredData };
    case DELETE_COUNTRY_SUCCESS:
      return {
        ...state,
        countryData: action.refreshedCountryData
      };
    case SORT_COUNTRY_SUCCESS:
      return {
        ...state,
        countryData: action.sortedCountryData
      };
    default:
      return state;
  }
}

export const fetchCountry = countryData => ({
  type: FETCH_COUNTRY,
  countryData
});

export const addCountry = newCountryData => ({
  type: ADD_COUNTRY,
  newCountryData
});

export const filteredCountry = filteredData => ({
  type: FILTERED_COUNTRY
});

export const deleteCountry = willRemoveCountryData => ({
  type: DELETE_COUNTRY,
  willRemoveCountryData
});

export const sortCountry = (columnName, rule) => ({
  type: SORT_COUNTRY,
  columnName,
  rule
});
