import React, { Component } from "react";

export class News extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date,names } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imgUrl}
          className="card-img-top"
          alt="Not Found..."
          width="200px"
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {names}
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author} <br />
              on {date}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-sm btn-primary"
          >
            See Article
          </a>
        </div>
      </div>
    );
  }
}

export default News;
