import React, { Component } from "react";
import Loader from "../../Loader";

class NBAleaders extends Component {
  state = {
    loading: false,
    playerLeaders: null,
  };

  componentDidMount = async () => {
    this.setState({ loading: true });
    this.getLeaders();
  };

  getLeaders = async () => {
    this.setState({ loading: true });
    const playerStats = [
      "stats.PTS%2FG.D",
      "stats.REB%2FG.D",
      "stats.AST%2FG.D",
      "stats.STL%2FG.D",
      "stats.BS%2FG.D",
      "stats.FG%2525.D%26offset%3D5",
      "stats.3P%2525.D%26offset%3D17",
      "stats.FT%2525.D%26offset%3D27",
      "stats.MIN%2FG.D",
      "stats.TOV%2FG.D",
    ];

    const playerLeaders = [];

    for (let i = 0; i < playerStats.length; i++) {
      let stat = playerStats[i];
      const pInfo = await fetch(`/api/nba/leaders/${stat}`);
      const playerInfo = await pInfo.json();

      playerLeaders.push(playerInfo);
    }

    this.setState({
      loading: false,
      playerLeaders: playerLeaders,
    });
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (this.state.playerLeaders) {
      return (
        <div className="leaders-container">
          <div className="leaders-div">
            <div className="player-leaders-title">
              <h3>Player Stats</h3>
            </div>
            <div className="player-leaders">
              <div className="player-leaders-box">
                <h3 className="card-title">Points per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[0].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.PtsPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Rebounds per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[1].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.RebPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Assists per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[2].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.AstPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Steals per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[3].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.StlPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Blocks per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[4].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.BlkPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Field Goal Percentage</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[5].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {(item.stats.FgPct["#text"] / 100)
                                  .toFixed(3)
                                  .substr(1)}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Three Points Percentage</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[6].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {(item.stats.Fg3PtPct["#text"] / 100)
                                  .toFixed(3)
                                  .substr(1)}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Free Throw Percentage</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[7].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {(item.stats.FtPct["#text"] / 100)
                                  .toFixed(3)
                                  .substr(1)}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Minutes per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[8].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {(
                                  item.stats.MinSecondsPerGame["#text"] / 60
                                ).toFixed(1)}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Turnovers per Game</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.playerLeaders[9].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.TovPerGame["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

export default NBAleaders;
