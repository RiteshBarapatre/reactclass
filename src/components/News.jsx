import React, { Component } from "react";

export class News extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgUrl} className="card-img-top" alt="Wait..." width="200px" height="200px"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-primary">
            See Article
          </a>
        </div>
      </div>
    );
  }
}

export default News;
