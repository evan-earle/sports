import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { NHL, NBA, MLB, NFL, home } from "../actions";
import { connect } from "react-redux";
import logo from "../../src/assets/logo.PNG";

class Nav extends Component {
  render() {
    if (this.props.page[0] === "NEWS") {
      return (
        <nav>
          <ul className="nav-links">
            <div className="logo-label">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="logo-image"
                    src={logo}
                    onClick={() => this.props.home()}
                    alt="hustle logo"
                  ></img>
                </NavLink>
              </div>
              <div className="news">
                <li>{this.props.page[0]}</li>
              </div>
            </div>
            <div className="sports-label">
              <NavLink to="/nhl/news">
                <li onClick={() => this.props.NHL()}>{this.props.page[1]} </li>
              </NavLink>
              <NavLink to="/nba/news">
                <li onClick={() => this.props.NBA()}>{this.props.page[2]}</li>
              </NavLink>
              <NavLink to="/nfl/news">
                <li onClick={() => this.props.NFL()}>{this.props.page[3]}</li>
              </NavLink>
              <NavLink to="/mlb/news">
                <li onClick={() => this.props.MLB()}>{this.props.page[4]}</li>
              </NavLink>
            </div>
          </ul>
        </nav>
      );
    } else if (this.props.page[0] === "NHL") {
      const sport = this.props.page[0].toLowerCase();
      return (
        <nav>
          <ul className="nav-links">
            <div className="logo-label">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="logo-image"
                    src={logo}
                    onClick={() => this.props.home()}
                    alt="hustle logo"
                  ></img>
                </NavLink>
              </div>
              <div className="news">
                <li>{this.props.page[0]}</li>
              </div>
            </div>
            <div className="sports-label">
              <NavLink
                to={`/${sport}/scores`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NHL()}>{this.props.page[1]}</li>
              </NavLink>
              <NavLink to={`/${sport}/news`} activeClassName="main-nav-active">
                <li onClick={() => this.props.NHL()}>{this.props.page[2]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/standings`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NHL()}>{this.props.page[3]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/leaders`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NHL()}>{this.props.page[4]}</li>
              </NavLink>
            </div>
          </ul>
        </nav>
      );
    } else if (this.props.page[0] === "NBA") {
      const sport = this.props.page[0].toLowerCase();

      return (
        <nav>
          <ul className="nav-links">
            <div className="logo-label">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="logo-image"
                    src={logo}
                    onClick={() => this.props.home()}
                    alt="hustle logo"
                  ></img>
                </NavLink>
              </div>
              <div className="news">
                <li>{this.props.page[0]}</li>
              </div>
            </div>
            <div className="sports-label">
              <NavLink
                to={`/${sport}/scores`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NBA()}>{this.props.page[1]}</li>
              </NavLink>
              <NavLink to={`/${sport}/news`} activeClassName="main-nav-active">
                <li onClick={() => this.props.NBA()}>{this.props.page[2]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/standings`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NBA()}>{this.props.page[3]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/leaders`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NBA()}>{this.props.page[4]}</li>
              </NavLink>
            </div>
          </ul>
        </nav>
      );
    } else if (this.props.page[0] === "NFL") {
      const sport = this.props.page[0].toLowerCase();

      return (
        <nav>
          <ul className="nav-links">
            <div className="logo-label">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="logo-image"
                    src={logo}
                    onClick={() => this.props.home()}
                    alt="hustle logo"
                  ></img>
                </NavLink>
              </div>
              <div className="news">
                <li>{this.props.page[0]}</li>
              </div>
            </div>
            <div className="sports-label">
              <NavLink
                to={`/${sport}/scores`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NFL()}>{this.props.page[1]}</li>
              </NavLink>
              <NavLink to={`/${sport}/news`} activeClassName="main-nav-active">
                <li onClick={() => this.props.NFL()}>{this.props.page[2]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/standings`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NFL()}>{this.props.page[3]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/leaders`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.NFL()}>{this.props.page[4]}</li>
              </NavLink>
            </div>
          </ul>
        </nav>
      );
    } else if (this.props.page[0] === "MLB") {
      const sport = this.props.page[0].toLowerCase();

      return (
        <nav>
          <ul className="nav-links">
            <div className="logo-label">
              <div className="logo">
                <NavLink to="/">
                  <img
                    className="logo-image"
                    src={logo}
                    onClick={() => this.props.home()}
                    alt="hustle logo"
                  ></img>
                </NavLink>
              </div>
              <div className="news">
                <li>{this.props.page[0]}</li>
              </div>
            </div>
            <div className="sports-label">
              <NavLink
                to={`/${sport}/scores`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.MLB()}>{this.props.page[1]}</li>
              </NavLink>
              <NavLink to={`/${sport}/news`} activeClassName="main-nav-active">
                <li onClick={() => this.props.MLB()}>{this.props.page[2]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/standings`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.MLB()}>{this.props.page[3]}</li>
              </NavLink>
              <NavLink
                to={`/${sport}/leaders`}
                activeClassName="main-nav-active"
              >
                <li onClick={() => this.props.MLB()}>{this.props.page[4]}</li>
              </NavLink>
            </div>
          </ul>
        </nav>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    page: state.page.page,
    active: state.page.active,
  };
};

const mapDispatchToProps = () => {
  //actions
  return {
    NHL,
    NBA,
    MLB,
    NFL,
    home,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Nav);
