import React, { Component } from "react";
import News from "./News";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default class NewsItems extends Component {
  static defaultProps = {
    pageSize: 10,
    category: "general",
    title: "NewsMonkey trending...",
    country: "in",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: 0,
    };
  }

  async mainFunc(pages) {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&from=2023-01-19&to=2023-01-19&pageSize=${this.props.pageSize}&sortBy=popularity&apiKey=80c4a53861ff4cbabb5bb921a4d502d2&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResult: parsedData.totalResults,
      page: pages,
    });
    document.title = "NewsMonkey - " + this.props.title;
  }

  componentDidMount() {
    this.mainFunc(this.state.page + 1);
  }
  forward = () => {
    this.mainFunc(this.state.page + 1);
  };
  backward = () => {
    this.mainFunc(this.state.page - 1);
  };


  fetchMoreData = async () => {
    this.setState({page : this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&from=2023-01-19&to=2023-01-19&pageSize=${this.props.pageSize}&sortBy=popularity&apiKey=80c4a53861ff4cbabb5bb921a4d502d2&page=${this.state.page}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResults,
    });
    document.title = "NewsMonkey - " + this.props.title;
  };

  render() {
    return (
      <>
        <div className="container" style={{overflow : "hidden"}}>
          <h2 className="my-3 mb-4 text-center">
            NewsMonkey - {this.props.title}
          </h2>
          {!this.state.loading ?
          <InfiniteScroll
            dataLength={this.state.articles.length}
            style={{overflow : "hidden"}}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResult}
            loader={<Spinner/>}
          >
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <News
                      title={
                        element.title === null
                          ? (element.title = "Title Missing...")
                          : element.title.slice(0, 43).concat("...")
                      }
                      names={
                        element.source.name === null
                          ? (element.source.name = "Unknown")
                          : element.source.name
                      }
                      description={
                        element.description === null
                          ? (element.description = "Description Missing...")
                          : element.description.slice(0, 90).concat("...")
                      }
                      author={
                        element.author === null
                          ? (element.author = "Unknown")
                          : element.author
                      }
                      date={
                        element.publishedAt === null
                          ? (element.publishedAt = "Random")
                          : new Date(element.publishedAt).toUTCString()
                      }
                      imgUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"
                      }
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
          :<Spinner/>}
        </div>
      </>
    );
  }
}
