import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import { initialState, listDepartures } from "../actions";

class Departures extends Component {
  componentDidMount() {
    this.props.initialState();
  }

  render() {
    console.log(this.props.departures);
    
    return (
      <ul className="list">
        {this.props.departures.map((departure, i) => (               
          <Departure departure={departure} key={i} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { list: state.list, departures: state.departures };
};

export default connect(
  mapStateToProps,
  { initialState, listDepartures }
)(Departures);
