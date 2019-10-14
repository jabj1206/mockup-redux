import Departures from "./Departures";
import SidePanel from "./SidePanel";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../actions/index";

class Home extends Component {
  componentDidMount() {
    this.props.search();
  }

  render() {
    return (
      <>
        <div className="col-2 left-border">
          <SidePanel />
        </div>
        <div className="col-10">
          {this.props.departures ? (
            this.props.departures.length > 0 ? (
              <Departures departuresss={this.props.departures} />
            ) : (
              <h3 className="text-center" style={{ marginTop: "100px" }}>
                No Results =(
              </h3>
            )
          ) : (
            <div>nada</div>
          )}
        </div>
        <Link to="/new" className=" row add-button justify-content-center">
          <i
            className="fa fa-plus "
            style={{ fontSize: "50px", marginTop: "25px" }}
          ></i>
        </Link>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { departures: state.search };
};

export default connect(
  mapStateToProps,
  { search }
)(Home);
