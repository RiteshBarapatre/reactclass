import React, { Component } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import NewsItems from './components/NewsItems';


export default class App extends Component {
  render() {   
    return (
      <>
      <Navbar/>
      <NewsItems/>
      </>
    )
  }
}

