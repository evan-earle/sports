import React, { Component } from "react";
import Loader from "../../Loader";

class NHLstandings extends Component {
  state = {
    loading: false,
    standings: null,
    format: null,
    active: "conference",
  };

  componentDidMount() {
    this.setState({ loading: true }, this.getStandings);
  }

  getStandings = async (format = "conference_team_standings") => {
    this.setState({ loading: true });

    const info = await fetch("/api/nhl/standings");
    const standings = await info.json();

    this.setState({
      loading: false,
      standings: standings,
      format: format,
    });
  };

  buttonClick = () => {
    this.setState({ active: "conference" });
  };
  buttonClick1 = () => {
    this.setState({ active: "division" });
  };
  buttonClick2 = () => {
    this.setState({ active: "overall" });
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (this.state.standings) {
      return (
        <div className="standings-container">
          <div className="standings-div">
            <div className="standings-buttons">
              <button
                className="standings-button"
                style={
                  this.state.active === "conference"
                    ? { backgroundColor: "#272733" }
                    : null
                }
                onClick={() => {
                  this.getStandings("conference_team_standings");
                  this.buttonClick();
                }}
              >
                CONFERENCE
              </button>
              <button
                className="standings-button"
                style={
                  this.state.active === "division"
                    ? { backgroundColor: "#272733" }
                    : null
                }
                onClick={() => {
                  this.getStandings("division_team_standings");
                  this.buttonClick1();
                }}
              >
                DIVISION
              </button>
              <button
                className="standings-button"
                style={
                  this.state.active === "overall"
                    ? { backgroundColor: "#272733" }
                    : null
                }
                onClick={() => {
                  this.getStandings("overall_team_standings");
                  this.buttonClick2();
                }}
              >
                OVERALL
              </button>
            </div>
            <div>
              {(() => {
                if (this.state.format === "conference_team_standings") {
                  return (
                    <div>
                      <table className="content-table">
                        <thead>
                          <tr>
                            <th>Eastern</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.conferenceteamstandings.conference[0].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}{" "}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                        <thead>
                          <tr>
                            <th>Western</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.conferenceteamstandings.conference[1].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}{" "}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  );
                } else if (this.state.format === "division_team_standings") {
                  return (
                    <div>
                      <table className="content-table">
                        <thead>
                          <tr>
                            <th>Atlantic</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.divisionteamstandings.division[0].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                        <thead>
                          <tr>
                            <th>Metropolitan</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.divisionteamstandings.division[1].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                        <thead>
                          <tr>
                            <th>Pacific</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.divisionteamstandings.division[2].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                        <thead>
                          <tr>
                            <th>Central</th>
                            <th>GP</th>
                            <th>W-L-OTL</th>
                            <th>P</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.divisionteamstandings.division[3].teamentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  );
                } else if (this.state.format === "overall_team_standings") {
                  return (
                    <div>
                      <table className="content-table">
                        <thead>
                          <tr>
                            <th>Team</th>
                            <th>W-L</th>
                            <th>PCT</th>
                            <th>GB</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.standings.overallteamstandings.teamstandingsentry.map(
                            (item) => {
                              return (
                                <tr key={item.rank}>
                                  <td>
                                    {item.rank} {item.team.Abbreviation}{" "}
                                    {item.team.Name}
                                  </td>
                                  <td>{item.stats.GamesPlayed["#text"]}</td>
                                  <td>
                                    {item.stats.stats.Wins["#text"]}-
                                    {item.stats.stats.Losses["#text"]}-
                                    {item.stats.stats.OvertimeLosses["#text"]}{" "}
                                  </td>
                                  <td>{item.stats.stats.Points["#text"]}</td>
                                </tr>
                              );
                            }
                          )}
                        </tbody>
                      </table>
                    </div>
                  );
                }
              })()}
            </div>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}
export default NHLstandings;
