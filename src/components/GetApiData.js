import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { GetApi } from "../redux/actions";

export class GetApiData extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
    };
    console.log("state", this.state);
  }

  componentDidMount(mydata) {
    console.log("props", this.props);
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log("data", res);
      const data = res.data;
      this.setState({ data });
    });
  }

  render() {
    console.log("this.state", this.state);
    return (
      <>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <h1>Api Call </h1>
            {this.state.data.map((elem, i) => {
              return (
                <h5 key={i}>
                  {" "}
                  {i + 1} {elem.name}{" "}
                </h5>
              );
            })}
          </div>
          <div>
            <h1>Redux api call</h1>
            {this.state.data.map((elem, i) => {
              return (
                <h5 key={i}>
                  {i + 1} {elem.name}{" "}
                </h5>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("getstate", state);
  return {
    apiDatas: state.apiCall.data.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    mydata: () => dispatch(GetApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetApiData);
