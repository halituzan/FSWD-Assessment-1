import React, { Component } from "react";
import { Link } from "react-router-dom";



export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/candidates">
                Candidates
              </Link>
              <Link className="nav-link" to="/about-us">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
