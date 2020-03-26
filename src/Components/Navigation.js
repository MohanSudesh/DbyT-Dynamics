import React from "react";

export default function Navigation() {
  return (
    <div>
      <nav id="nav" className="sudesh1">
        <ul className="sudesh4">
          <li>
            <a href="#intro">Sign In</a>
          </li>
          <li>
            <a href="#first">USA(English)</a>
          </li>
        </ul>
        <ul className="sudesh5">
          <li>
            <a href="/" className="active">
              HOME
            </a>
          </li>
          <li>
            <a href="/specalities">FEATURES</a>
          </li>
          <li>
            <a href="/achievements">ACHIEVEMENTS</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <li>
            <a href="/ourteam">OUR TEAM</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
