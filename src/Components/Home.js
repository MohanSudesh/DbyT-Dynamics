import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div>
      <div id="c">
        <img
          src={"images/hd-electric-concept-2.png"}
          className="d"
          alt="hd-electric-concept"
        ></img>
      </div>
      <Product />
    </div>
  );
}
