export const SEARCH_INPUT = "input/SEARCH_INPUT";

const initialState = {
  keyword: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_INPUT:
      return { keyword: action.keyword };
    default:
      return state;
  }
}

export const searchInput = keyword => ({
  type: SEARCH_INPUT,
  keyword
});
