import React from "react";
import { connect } from "react-redux";
import { fetchNHLNews } from "../../../actions/index";
import NewsCard from "../../NewsCard";
import moment from "moment";
import MainNews from "../../MainNews";
import Loader from "../../Loader";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchNHLNews();
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <Loader />
        </div>
      );
    } else if (this.props.NHLNews.articles) {
      const author = this.props.NHLNews.articles.map(
        (element) => element.source.name
      );

      const title = this.props.NHLNews.articles.map(
        (element) => element.title.split(" - ")[0]
      );

      const time = this.props.NHLNews.articles.map(
        (element) => element.publishedAt
      );

      const timestamp = time.map((element) => moment(element).fromNow());

      const newsImage = this.props.NHLNews.articles.map(
        (element) => element.urlToImage
      );

      const articleURL = this.props.NHLNews.articles.map(
        (element) => element.url
      );

      return (
        <div className="home-container">
          <div className="box-container">
            <div className="main-news">
              <a
                href={`${articleURL[0]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MainNews
                  NHLNews={this.props.NHLNews}
                  author={author[0]}
                  title={title[0]}
                  time={timestamp[0]}
                  newsImage={newsImage[0]}
                />
              </a>
            </div>

            <div className="news-card">
              <a
                href={`${articleURL[1]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[1]}
                  title={title[1]}
                  time={timestamp[1]}
                  newsImage={newsImage[1]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[2]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[2]}
                  title={title[2]}
                  time={timestamp[2]}
                  newsImage={newsImage[2]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[3]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[3]}
                  title={title[3]}
                  time={timestamp[3]}
                  newsImage={newsImage[3]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[4]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[4]}
                  title={title[4]}
                  time={timestamp[4]}
                  newsImage={newsImage[4]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[5]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[5]}
                  title={title[5]}
                  time={timestamp[5]}
                  newsImage={newsImage[5]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[6]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[6]}
                  title={title[6]}
                  time={timestamp[6]}
                  newsImage={newsImage[6]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[7]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[7]}
                  title={title[7]}
                  time={timestamp[7]}
                  newsImage={newsImage[7]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[8]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[8]}
                  title={title[8]}
                  time={timestamp[8]}
                  newsImage={newsImage[8]}
                />
              </a>
            </div>
            <div className="news-card">
              <a
                href={`${articleURL[9]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewsCard
                  NHLNews={this.props.NHLNews}
                  author={author[9]}
                  title={title[9]}
                  time={timestamp[9]}
                  newsImage={newsImage[9]}
                />
              </a>
            </div>
          </div>
        </div>
      );
    }
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    NHLNews: state.NHLNews.news,
    loading: state.NHLNews.loading,
  };
};

const mapDispatchToProps = () => {
  return {
    fetchNHLNews,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Home);
