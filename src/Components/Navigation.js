import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav id="nav">
        {/* <ul className="sudesh4">
          <li>
            <a href="#intro">Sign In</a>
          </li>
          <li>
            <a href="#first">USA(English)</a>
          </li>
        </ul> */}
        <ul>
          <li>
            <NavLink to="/" exact>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/specalities">FEATURES</NavLink>
          </li>
          <li>
            <NavLink to="/achievements">ACHIEVEMENTS</NavLink>
          </li>
          <li>
            <NavLink to="/blog">BLOG</NavLink>
          </li>
          <li>
            <NavLink to="/ourteam">OUR TEAM</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          {/* <li>
            <a href="#contact">SEARCH</a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
