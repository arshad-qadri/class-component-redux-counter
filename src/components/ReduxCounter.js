import React, { Component } from "react";
import { connect } from "react-redux";
import { dec, inc } from "./redux/actions";

export class ReduxCounter extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1>Redux counter</h1>

        <h1> {this.props.counter} </h1>

        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  //   console.log(dispatch);
  return {
    increment: () => dispatch(inc()),
    decrement: () => dispatch(dec()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
