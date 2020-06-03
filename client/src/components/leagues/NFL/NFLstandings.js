import React, { Component } from "react";
import { connect } from "react-redux";

class NFLstandings extends Component {
  render() {
    return (
      <div>
        <h1>Coming September 2020</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};

export default connect(mapStateToProps)(NFLstandings);
