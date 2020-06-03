import React from "react";

class MainNews extends React.Component {
  render() {
    return (
      <div className="main-news-container">
        <div className="main-news-image-div">
          <img
            className="main-news-image"
            alt="article"
            src={this.props.newsImage}
          ></img>
        </div>
        <div className="main-news-description">
          <div className="main-news-title">{this.props.title}</div>
          <div className="main-news-author">
            {this.props.author} | {this.props.time}
          </div>
        </div>
      </div>
    );
  }
}

export default MainNews;
