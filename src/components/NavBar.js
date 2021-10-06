import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <nav className="navbar  navbar-fixed-top navbar-inverse">
          <div className="container">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav navbar-nav ">
                <li>
                  <NavLink to="/" activeClassName="text-gray-900">
                    01 : Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/project" activeClassName="text-gray-900">
                    02 : Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="text-gray-900">
                    03 : About me
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/post" activeClassName="text-gray-900">
                    04 : Blog
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

