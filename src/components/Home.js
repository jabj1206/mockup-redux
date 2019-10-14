import Departures from "./Departures";
import SidePanel from "./SidePanel";


import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    console.log(this.props.location);
    return (
      <>
      
        <div className="col-2 left-border">
          <SidePanel />
        </div>
        <div className="col-10">
          <Departures />
        </div>
        <Link to='/new' className=" row add-button justify-content-center">
          <i
            className="fa fa-plus "
            style={{ fontSize: "50px", marginTop: "25px" }}
          ></i>
        </Link>
      </>
    );
  }
}

export default Home;
