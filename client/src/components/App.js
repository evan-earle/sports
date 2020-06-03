import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NHLnews from "./leagues/NHL/NHLnews";
import NHLscores from "./leagues/NHL/NHLscores";
import NHLstandings from "./leagues/NHL/NHLstandings";
import NHLleaders from "./leagues/NHL/NHLleaders";

import NBAnews from "./leagues/NBA/NBAnews";
import NBAscores from "./leagues/NBA/NBAscores";
import NBAstandings from "./leagues/NBA/NBAstandings";
import NBAleaders from "./leagues/NBA/NBAleaders";

import NFLnews from "./leagues/NFL/NFLnews";
import NFLscores from "./leagues/NFL/NFLscores";
import NFLstandings from "./leagues/NFL/NFLstandings";
import NFLleaders from "./leagues/NFL/NFLleaders";

import MLBnews from "./leagues/MLB/MLBnews";
import MLBscores from "./leagues/MLB/MLBscores";
import MLBstandings from "./leagues/MLB/MLBstandings";
import MLBleaders from "./leagues/MLB/MLBleaders";

import Nav from "./Nav";
import Home from "./Home";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />

        <Route path="/nhl/news" component={NHLnews} />
        <Route path="/nhl/scores" component={NHLscores} />
        <Route path="/nhl/standings" component={NHLstandings} />
        <Route path="/nhl/leaders" component={NHLleaders} />

        <Route path="/nba/news" component={NBAnews} />
        <Route path="/nba/scores" component={NBAscores} />
        <Route path="/nba/standings" component={NBAstandings} />
        <Route path="/nba/leaders" component={NBAleaders} />

        <Route path="/nfl/news" component={NFLnews} />
        <Route path="/nfl/scores" component={NFLscores} />
        <Route path="/nfl/standings" component={NFLstandings} />
        <Route path="/nfl/leaders" component={NFLleaders} />

        <Route path="/mlb/news" component={MLBnews} />
        <Route path="/mlb/scores" component={MLBscores} />
        <Route path="/mlb/standings" component={MLBstandings} />
        <Route path="/mlb/leaders" component={MLBleaders} />
      </div>
    </Router>
  );
};

export default App;
