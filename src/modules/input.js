const SEARCH_COUNTRY = 'input/SEARCH_COUNTRY';
const HANDLE_CHANGE = 'input/HANDLE_CHANGE';

const initialState = {
  keyword: '',
  name: '',
  alpha2Code: '',
  callingCodes: '',
  capital: '',
  region: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return { keyword: action.keyword };
    case HANDLE_CHANGE:
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export const searchCountry = keyword => ({
  type: SEARCH_COUNTRY,
  keyword,
});

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  name,
  value,
});
