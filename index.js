const express = require("express");
var request = require("request");
var cors = require("cors");
const app = express();

const btoa = require("btoa");
const path = require("path");

app.use(express.static(path.join(__dirname, "client/build")));
app.use(cors());

//Main page
app.get("/api/", (req, res) => {
  request(
    "https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=5aad2a122a8f4983bdfc03458c1e815e",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

//NHL
app.get(`/api/nhl/news/:newsDate`, (req, res) => {
  request(
    `https://newsapi.org/v2/everything?language=en&excludeDomains=youtube.com, uni-watch.com&q=hockey AND nhl&from=${req.params.newsDate}&apiKey=5aad2a122a8f4983bdfc03458c1e815e`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/nhl/scores/:date`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nhl/2019-2020-regular/scoreboard.json?fordate=${req.params.date}`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get("/api/nhl/standings", (req, res) => {
  request(
    "https://api.mysportsfeeds.com/v1.2/pull/nhl/2019-2020-regular/conference_team_standings.json?",
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/nhl/leaders/:pStat`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/cumulative_player_stats.json?playerstats=PTS/G,REB/G,AST/G,STL/G,BS/G,FG%25,3P%25,FT%25,MIN/G,TOV/G&sort=${req.params.pStat}&limit=7`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/nhl/leaders/:gStat`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nhl/2019-2020-regular/cumulative_player_stats.json?playerstats=W,GAA,Sv%25,SA,SO,GS&position=g&sort=${req.params.gStat}&limit=7`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

//NBA
app.get(`/api/nba/news/:newsDate`, (req, res) => {
  request(
    `https://newsapi.org/v2/everything?language=en&excludeDomains=youtube.com, uni-watch.com&q=basketball AND nba&from=${req.params.newsDate}&apiKey=5aad2a122a8f4983bdfc03458c1e815e`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/nba/scores/:date`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/scoreboard.json?fordate=${req.params.date}`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get("/api/nba/standings/:format", (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/${req.params.format}.json?`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/nba/leaders/:stat`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/nba/2019-2020-regular/cumulative_player_stats.json?playerstats=PTS/G,REB/G,AST/G,STL/G,BS/G,FG%25,3P%25,FT%25,MIN/G,TOV/G&sort=${req.params.stat}&limit=7`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

//NFL
app.get(`/api/nfl/news/:newsDate`, (req, res) => {
  request(
    `https://newsapi.org/v2/everything?language=en&excludeDomains=youtube.com, uni-watch.com&q=nfl AND football&from=${req.params.newsDate}&apiKey=5aad2a122a8f4983bdfc03458c1e815e`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

//MLB
app.get(`/api/mlb/news/:newsDate`, (req, res) => {
  request(
    `https://newsapi.org/v2/everything?language=en&excludeDomains=youtube.com, uni-watch.com&q=mlb AND baseball&from=${req.params.newsDate}&apiKey=5aad2a122a8f4983bdfc03458c1e815e`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get(`/api/mlb/scores/:date`, (req, res) => {
  request(
    `https://api.mysportsfeeds.com/v1.2/pull/mlb/2020-regular/scoreboard.json?fordate=${req.params.date}`,
    {
      headers: {
        Authorization:
          "Basic " + btoa("4c6696aa-583c-4dcc-8f35-d24411:buster19"),
      },
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
    }
  );
});

app.get("*", (req, res) => {
  res.sendfile("./public/main.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
