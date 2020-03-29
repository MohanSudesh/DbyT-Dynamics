import React from "react";

export default function Card({ index, image, title, description }) {
  return (
    <div id={`card${index}`} className="card">
      <div className="image">
        <img src={image} alt="Cycle" />
      </div>
      <div className="title">{title}</div>
      <div className="description">
        {description}
        <a href="">Read More</a>
      </div>
    </div>
  );
}
