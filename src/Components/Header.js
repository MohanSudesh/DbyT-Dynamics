import React, { Component } from "react";
import Navigation from "./Navigation";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handletoggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  //   = (prevState) => {
  //     return { toggle: !prevState.toggle };
  //   };
  // };
  render() {
    let sidedrawer;
    if (this.state.toggle) {
      sidedrawer = <Navigation closetoggle={this.handletoggle} />;
    }
    return (
      <div>
        <nav id="f">
          <button class="hamburger" onClick={this.handletoggle}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </button>
          <ul className="left">
            <li>
              <img src="images\color-fill-2.png" alt="DbyT Dynamics" />
            </li>
          </ul>
          <ul className="right">
            <li>
              <a
                href="#"
                className="icon brands fa-twitter alt"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/dbytdynamics/"
                className="icon brands fa-facebook alt"
                target="_blank"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon brands fa-instagram alt"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/dbyt-dynamics"
                target="_blank"
                className="icon brands fa-linkedin alt"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="icon brands fa-youtube alt"
                target="_blank"
              >
                <span className="label">Dribbble</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="full">
          <Navigation />
        </div>
        <div className="hide">{sidedrawer}</div>
      </div>
    );
  }
}
