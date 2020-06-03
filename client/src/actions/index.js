import moment from "moment";

export const home = () => {
  return {
    type: "home",
  };
};

export const NHL = () => {
  return {
    type: "NHL",
  };
};

export const NBA = () => {
  return {
    type: "NBA",
  };
};

export const NFL = () => {
  return {
    type: "NFL",
  };
};

export const MLB = () => {
  return {
    type: "MLB",
  };
};

export const fetchTopNews = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_TOP_NEWS_REQUEST",
    });

    const info = await fetch(`/api`);
    //  console.log("info: ", info);
    const news = await info.json();
    console.log("news: ", news);

    dispatch({
      type: "FETCH_TOP_NEWS",
      payload: news,
    });
  };
};

let date = moment().subtract(1, "days").format("YYYY-MM-DD");

export const fetchNHLNews = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_NHL_NEWS_REQUEST",
    });

    const info = await fetch(`/api/nhl/news/${date}`);
    const news = await info.json();

    dispatch({
      type: "FETCH_NHL_NEWS",
      payload: news,
    });
  };
};

export const fetchNBANews = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_NBA_NEWS_REQUEST",
    });

    const info = await fetch(`/api/nba/news/${date}`);
    const news = await info.json();

    dispatch({
      type: "FETCH_NBA_NEWS",
      payload: news,
    });
  };
};

export const fetchNFLNews = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_NFL_NEWS_REQUEST",
    });

    const info = await fetch(`/api/nfl/news/${date}`);
    const news = await info.json();

    dispatch({
      type: "FETCH_NFL_NEWS",
      payload: news,
    });
  };
};

export const fetchMLBNews = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCH_MLB_NEWS_REQUEST",
    });

    const info = await fetch(`/api/mlb/news/${date}`);
    const news = await info.json();

    dispatch({
      type: "FETCH_MLB_NEWS",
      payload: news,
    });
  };
};
