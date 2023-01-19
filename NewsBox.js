import React, { Component } from "react";
import Spiner from "./Spiner.jsx";
import NewsItem from "./NewsItem.js";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsBox extends Component {
  static defaultProps = {
    category: "general",
  };
  static propTypes = {
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults:0
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=0643376184294d29928cde62699c888b&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults, loading: false });
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&apikey=0643376184294d29928cde62699c888b&pageSize=${this.props.pageSize}&category=${this.props.category}&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ page: this.state.page + 1 });
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      < div className="container my-3">
        <h1 className="text-center my-3">Top HeadLines</h1>
    
        <InfiniteScroll className="overflow-hidden"
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spiner />}
        >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      aurthor={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
        </InfiniteScroll>
      </div>
    );
  }
}
