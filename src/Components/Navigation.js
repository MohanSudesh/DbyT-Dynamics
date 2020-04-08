import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation(props) {
  return (
    <div>
      <nav id="nav">
        <ul className="nav-links">
          <li onClick={props.closetoggle}>
            <NavLink to="/" exact activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li onClick={props.closetoggle}>
            <NavLink to="/specalities" activeClassName="active">
              FEATURES
            </NavLink>
          </li>
          <li onClick={props.closetoggle}>
            <NavLink to="/achievements" activeClassName="active">
              ACHIEVEMENTS
            </NavLink>
          </li>
          <li onClick={props.closetoggle}>
            <NavLink to="/blog" activeClassName="active">
              BLOG
            </NavLink>
          </li>
          <li onClick={props.closetoggle}>
            <NavLink to="/ourteam" activeClassName="active">
              OUR TEAM
            </NavLink>
          </li>
          <li onClick={props.closetoggle}>
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
          </li>
          {/* <li>
            <a href="#contact">SEARCH</a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
