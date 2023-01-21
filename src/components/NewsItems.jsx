import React, { Component } from "react";
import News from "./News";
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

  async mainFunc (pages){
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&from=2023-01-19&to=2023-01-19&pageSize=${this.props.pageSize}&sortBy=popularity&apiKey=80c4a53861ff4cbabb5bb921a4d502d2&page=${this.state.page}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResult: parsedData.totalResults,
      page : pages
    });
    document.title = "NewsMonkey - " + this.props.title
  }


  componentDidMount() {
    this.mainFunc(this.state.page + 1)
  }
  forward = () => {
    this.mainFunc(this.state.page + 1)
  };
  backward = () => {
    this.mainFunc(this.state.page - 1)
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="my-2 text-center">NewsMonkey - {this.props.title}</h2>
          <div className="text-center">{this.state.loading && <Spinner />}</div>
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <News
                      title={
                        element.title === null
                          ? (element.title = "Title Missing...")
                          : element.title.slice(0, 43).concat("...")
                      }
                      names = {
                        element.source.name === null
                          ? (element.source.name = "Unknown")
                          : element.source.name
                      }
                      description={
                        element.description === null
                          ? (element.description = "Description Missing...")
                          : element.description.slice(0, 90).concat("...")
                      }
                      author = {
                        element.author === null
                        ? (element.author = "Unknown")
                        : element.author
                      }
                      date = {
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
          <div className="d-flex justify-content-between my-3">
            <div
              className={`btn btn-primary ${
                this.state.page <= 1 ? "disabled" : ""
              }`}
              onClick={this.backward}
              id="previous"
            >
              &larr; Previous
            </div>
            <div
              className={`btn btn-danger ${
                this.state.page < Math.ceil(this.state.totalResult/ this.props.pageSize)
                  ? ""
                  : "disabled"
              }`}
              onClick={this.forward}
              id="next"
              style={{ transform: "translateX(-70px)" }}
            >
              Next &rarr;
            </div>
          </div>
        </div>
      </>
    );
  }
}
