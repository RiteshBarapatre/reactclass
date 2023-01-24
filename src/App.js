import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import NewsItems from "./components/NewsItems";

const App = ()=>{

  const apiKey = process.env.REACT_APP_NEWS_API

  const [state, setState] = useState(10)


  const setProgress = (progress) => {
    setState(progress);
  };
    return (
      <>
        <LoadingBar
          color="#f11946"
          progress={state}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsItems
                setProgress={setProgress}
                apiKey = {apiKey}
                key="general"
                pageSize={100}
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
                setProgress={setProgress}
                apiKey = {apiKey}
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
                setProgress={setProgress}
                apiKey = {apiKey}
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
                setProgress={setProgress}
                apiKey = {apiKey}
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
                setProgress={setProgress}
                apiKey = {apiKey}
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
                setProgress={setProgress}
                apiKey = {apiKey}
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

export default App
