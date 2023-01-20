import React, { Component } from "react";
import News from "./News";

export default class NewsItems extends Component {
   
    constructor(){
        super();
        this.state = {
            articles :[],
            loading : false,
            next : 1
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=cricket&from=2022-12-19&sortBy=publishedAt&pageSize=21&page=1&apiKey=80c4a53861ff4cbabb5bb921a4d502d2`
        let data = await fetch(url)
        let parsedData =await data.json()
        this.setState(parsedData)
    }

    render() {
      const forward = ()=>{
          this.setState({next : 2})   
      }
      const backward = ()=>{
          this.setState({next : 1})
      }
    return (
      <>
        <div className="container">
          <h2 className="my-2">NewsMoneky - Trendings....</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-2" key={element.url} >
              <News title={element.title.slice(0,43).concat("...")} description={element.description.slice(0,90).concat("...")} imgUrl = {element.urlToImage ? element.urlToImage : "https://www.shutterstock.com/image-vector/no-image-available-vector-hand-260nw-745639717.jpg"} newsUrl = {element.url} />
            </div>
          })}  
          </div>
          <div className="row">
          <div className="col-md-2">
          <div className="btn btn-primary" onClick={backward}>Previous</div>
          <div className="btn btn-danger" onClick={forward}>Next</div>
          </div>
          </div>
          
        </div>
      </>
    );
  }
}
