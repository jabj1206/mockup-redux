import Departures from "./Departures";
import SidePanel from "./SidePanel";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { listDepartures } from "../actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.listDepartures();
  }

  render() {
    const {departures} = this.props.departures
 
    return (
      <>
        <div className="col-2 left-border">
          <SidePanel />
        </div>
        
        <div className="col-10">
          {departures.length > 0 ? (
            <Departures departuresss={departures} />
          ) : (
            <h3 className="text-center" style={{ marginTop: "100px" }}>
              No Results =(
            </h3>
          )}
        </div>
        <Link to="/new" className=" row add-button justify-content-center">
          <i
            className="fa fa-plus "
            style={{ fontSize: "50px", marginTop: "25px", color: 'white' }}
          ></i>
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { departures: state.departures };
};

export default connect(
  mapStateToProps,
  { listDepartures }
)(Home);
