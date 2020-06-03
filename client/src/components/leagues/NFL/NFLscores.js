import React, { Component } from "react";
//import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
//import Loader from "../../Loader";

class NFLscores extends Component {
  state = {
    startDate: new Date(),
    loading: false,
    scores: null,
  };

  // componentDidMount = async () => {

  //    this.setState({ loading: true }, this.getScores);
  // };

  handleChange = async (date) => {
    this.setState(
      {
        startDate: date,
        loading: true,
      },
      this.getScores
    );
  };

  getScores = async () => {
    let date = moment(this.state.startDate).format("YYYYMMDD");
    if (date > 20200202) {
      date = 20200202;
    }
    const info = await fetch(
      `https://api.mysportsfeeds.com/v1.2/pull/nfl/2020-playoff/scoreboard.json?fordate=20200104`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Basic " + btoa(`7e10fe9d-a239-4b64-9566-d2ef94:buster19`),
        },
      }
    );

    const scores = await info.json();

    this.setState({ loading: false, scores: scores });
  };

  render() {
    return (
      <div>
        <h1>Coming September 2020</h1>
      </div>
    );
    //     let date = moment(this.state.startDate).format("dddd MMMM Do");
    //     let lastDate = moment(this.state.startDate).format("YYYYMMDD");
    //     if (lastDate > 20200202) {
    //       date = "Sunday February 2nd";
    //     }
    //     if (this.state.loading) {
    //       return (
    //         <div>
    //           <Loader />
    //         </div>
    //       );
    //     } else if (this.state.scores) {
    //       console.log(this.state.scores);
    //       return (
    //         <div className="scores-container">
    //           <div className="scores-div">
    //             <div className="scores-title">
    //               <div className="scores-date">
    //                 <h3>{date}</h3>
    //               </div>

    //               <div className="calendar-picker">
    //                 <label>
    //                   <i className="fas fa-calendar-alt"></i>
    //                   <DatePicker
    //                     selected={this.state.startDate}
    //                     onChange={this.handleChange}
    //                     showPopperArrow={false}
    //                   />
    //                 </label>
    //               </div>
    //             </div>
    //             <div className="scores-games-container">
    //               {this.state.scores.scoreboard.gameScore.map((item) => {
    //                 return (
    //                   <div className="scores-games">
    //                     <div className="scores-games-names">
    //                       <p>
    //                         {item.game.awayTeam.Abbreviation}{" "}
    //                         {item.game.awayTeam.Name}
    //                       </p>
    //                       <p>
    //                         {item.game.homeTeam.Abbreviation}{" "}
    //                         {item.game.homeTeam.Name}
    //                       </p>
    //                     </div>
    //                     <div className="scores-games-scores">
    //                       <p>{item.awayScore}</p>
    //                       <p>{item.homeScore}</p>
    //                     </div>
    //                     <div className="scores-games-time">
    //                       {(() => {
    //                         if (item.isCompleted === "true") {
    //                           return <p>Final</p>;
    //                         } else if (item.game.delayedOrPostponedReason) {
    //                           return <p>Postponed</p>;
    //                         } else {
    //                           return <p>{item.game.time}</p>;
    //                         }
    //                       })()}
    //                     </div>
    //                   </div>
    //                 );
    //               })}
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     }
    //     return <div></div>;
  }
}

export default NFLscores;