import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsItems from "./components/NewsItems";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsItems
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
              <NewsItems key="science" title="Science..." category="science" />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsItems key="sports" title="Sports..." category="sports" />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsItems
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
