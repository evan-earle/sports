import { combineReducers } from "redux";
import page from "./page";
import topNews from "./topNews";
import NHLNews from "./NHLNews";
import NBANews from "./NBANews";
import NFLNews from "./NFLNews";
import MLBNews from "./MLBNews";

const reducers = combineReducers({
  page,
  topNews,
  NHLNews,
  NBANews,
  NFLNews,
  MLBNews,
});

export default reducers;
