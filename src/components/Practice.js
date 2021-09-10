import React, { Component } from "react";

export class Practice extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
    console.log(this.state.count);
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <>
        <h1>Counter</h1> <br />
        <h1> {this.state.count} </h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </>
    );
  }
}

export default Practice;
