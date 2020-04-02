import React, { Component } from "react";
import Card from "./Card";
import CardData from "./Data";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presentData: CardData[0],
      totalData: CardData
    };
  }

  prevProperty = () => {
    const Index = this.state.presentData.index - 1;
    this.setState({
      presentData: CardData[Index - 1]
    });
  };
  nextProperty = () => {
    const Index = this.state.presentData.index + 1;
    this.setState({
      presentData: CardData[Index - 1]
    });
  };

  render() {
    const { presentData, totalData } = this.state;
    return (
      <div>
        <h1>Our Products</h1>
        <div className={`cardslider active-card-${presentData.index}`}>
          <div
            className="cards"
            style={{
              transform: `translateX(-${presentData.index * 10}%)`
            }}
          >
            {CardData.map(data => (
              <Card {...data} key={data.id} />
            ))}
          </div>
        </div>
        <button
          onClick={() => this.prevProperty()}
          disabled={presentData.index === 1}
          className="but"
        >
          Prev
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={presentData.index === 10}
          className="but"
        >
          Next
        </button>
      </div>
    );
  }
}
