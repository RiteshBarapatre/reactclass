import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=>{

    let activeStyle = {
      fontSize : '17px',
      borderBottom : '2px solid white'
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position : "sticky",top : "0",zIndex : "3"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            NewsMonkey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/business" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entertainment" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/science" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/sports" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/technology" style={({isActive})=>isActive ? activeStyle : undefined}>
                  Technology
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // onChange={props.changed}
              />
              <button className="btn btn-outline-light">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar