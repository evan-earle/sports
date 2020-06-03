const initialState = {
  loading: false,
  news: [],
  error: ""
};

const fetchNFLNews = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NFL_NEWS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_NFL_NEWS":
      return {
        loading: false,
        news: action.payload,
        error: ""
      };
    case "FETCH_NFL_NEWS_FAILURE":
      return {
        loading: false,
        news: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default fetchNFLNews;
