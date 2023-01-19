import React, { Component } from "react";
import img from "./img.jpg"

export default class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,aurthor,date } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem" }}>
        <img src={!imageUrl?img:imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">
            by {aurthor} on {date}</small></p>
          <a href={(newsUrl)} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}
