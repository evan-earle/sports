import React, { Component } from "react";
import Loader from "../../Loader";

class NHLleaders extends Component {
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
      "stats.Pts.D",
      "stats.G.D",
      "stats.A.D",
      "stats.PPPts.D",
      "stats.Sh.D",
      "stats.PIM.D",
    ];
    const goalieStats = [
      "stats.W.D",
      "stats.GAA.A&offset=80",
      "stats.Sv%25.D",
      "stats.SA.D",
      "stats.SO.D",
      "stats.GS.D",
    ];
    const playerLeaders = [];
    const goalieLeaders = [];

    for (let i = 0; i < playerStats.length; i++) {
      let pStat = playerStats[i];
      const pInfo = await fetch(`/api/nhl/leaders/${pStat}`);
      const playerInfo = await pInfo.json();

      playerLeaders.push(playerInfo);
    }

    for (let i = 0; i < goalieStats.length; i++) {
      let gStat = playerStats[i];
      const gInfo = await fetch(`/api/nhl/leaders/${gStat}`);
      const goalieInfo = await gInfo.json();

      goalieLeaders.push(goalieInfo);
    }

    this.setState({
      loading: false,
      playerLeaders: playerLeaders,
      goalieLeaders: goalieLeaders,
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
                <h3 className="card-title">Points</h3>
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
                              <td>{item.stats.stats.Points["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Goals</h3>
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
                              <td>{item.stats.stats.Goals["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Assists</h3>
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
                              <td>{item.stats.stats.Assists["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Power Play Points</h3>
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
                              <td>
                                {item.stats.stats.PowerplayPoints["#text"]}
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
                <h3 className="card-title">Shots</h3>
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
                              <td>{item.stats.stats.Shots["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Penalty Minutes</h3>
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
                                {item.stats.stats.PenaltyMinutes["#text"]}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="goalie-leaders-title">
              <h3>Goalie Stats</h3>
            </div>
            <div className="player-leaders">
              <div className="player-leaders-box">
                <h3 className="card-title">Wins</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[0].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.stats.Wins["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Goals Against Average</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[1].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {Math.round(
                                  item.stats.stats.GoalsAgainstAverage[
                                    "#text"
                                  ] * 100
                                ) / 100}
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
                <h3 className="card-title">Save Percentage</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[2].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>
                                {item.stats.stats.SavePercentage["#text"]
                                  .toString()
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
                <h3 className="card-title">Shots Against</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[3].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.stats.ShotsAgainst["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Shutouts</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[4].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.stats.Shutouts["#text"]}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="player-leaders-box">
                <h3 className="card-title">Games Started</h3>
                <div>
                  <table className="players-table">
                    <tbody>
                      {this.state.goalieLeaders[5].cumulativeplayerstats.playerstatsentry.map(
                        (item, i) => {
                          return (
                            <tr key={i}>
                              <td>{i + 1}</td>
                              <td>{item.team.Abbreviation}</td>
                              <td>
                                {item.player.FirstName} {item.player.LastName}
                              </td>
                              <td>{item.stats.stats.GamesStarted["#text"]}</td>
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

export default NHLleaders;
