import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import NewsItems from "./components/NewsItems";

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 10,
  };


  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <>
        <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(100)}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="general"
                pageSize={12}
                category="general"
                title="Trending ..."
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="business"
                title="Business..."
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="entertainment"
                title="Entertainment..."
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="science"
                title="Science..."
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="sports"
                title="Sports..."
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsItems
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="technology"
                title="Technology..."
                category="technology"
              />
            }
          />
        </Routes>
      </>
    );
  }
}
