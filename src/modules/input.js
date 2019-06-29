const SEARCH_COUNTRY = "input/SEARCH_COUNTRY";

const initialState = {
  keyword: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return { keyword: action.keyword };
    default:
      return state;
  }
}

export const searchCountry = keyword => ({
  type: SEARCH_COUNTRY,
  keyword
});
