import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import { initialState, listDepartures, fetchDepartures } from "../actions";

class Departures extends Component {
  componentDidMount() {
    this.props.listDepartures();
  }

  render() {
     
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
  return {departures: state.departures };
};

export default connect(
  mapStateToProps,
  {listDepartures, fetchDepartures }
)(Departures);
