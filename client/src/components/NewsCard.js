import React from "react";

class NewsCard extends React.Component {
  render() {
    return (
      <div className="news-card-container">
        <div className="news-image-div">
          <img
            className="news-image"
            alt="article"
            src={this.props.newsImage}
          ></img>
        </div>
        <div className="news-card-description">
          <div className="news-card-title">{this.props.title}</div>
          <div className="news-card-author">
            {this.props.author} | {this.props.time}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
