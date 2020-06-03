const initialState = {
  loading: false,
  news: [],
  error: ""
};

const fetchMLBNews = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MLB_NEWS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_MLB_NEWS":
      return {
        loading: false,
        news: action.payload,
        error: ""
      };
    case "FETCH_MLB_NEWS_FAILURE":
      return {
        loading: false,
        news: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchMLBNews;
