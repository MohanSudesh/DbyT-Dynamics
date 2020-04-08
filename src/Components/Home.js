import React, { Component } from "react";
import Product from "./Product";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <div id="c">
          <img
            src={"images/hd-electric-concept-2.png"}
            className="d"
            alt="hd-electric-concept"
          ></img>
        </div>

        {/* <Product /> */}
      </div>
    );
  }
}

export default Home;
