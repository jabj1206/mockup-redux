import React from "react";
import { deleteDeparture } from "../actions/index";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import Moment from "react-moment";
import NumberFormat from "react-number-format";

import "./styles/departure.css";

const Departure = props => {
  const _onClick = (e) => {
    return props.deleteDeparture(props.departure.id);
  };

  let HyD = `${props.departure.date} ${props.departure.hour}`;
  return (
    <li style={{ marginBottom: "20px", height:'100px' }}>
      <div className="icon">
        <i
          className="fa fa-check-circle"
          style={{ color: "#EA9049", fontSize: "32px" }}
        />
      </div>
      <div className="date leftborder">
        <Moment format="dddd">{HyD}</Moment>
        <span>
          <Moment format="Do">{HyD}</Moment> &nbsp;
          <Moment format="hh">{HyD}</Moment>:<Moment format="mm">{HyD}</Moment>
        </span>
        <Moment format="A">{HyD}</Moment>
        {/* <FormattedDate value={this.props.departure.date} format="long" /> */}
      </div>
      <div className="plane icon-departure">
        <span style={{ marginLeft: "30px" }}>
          <i className="fas fa-location-arrow" />
        </span>
      </div>
      <div className="ship">
        <span>{props.departure.from}</span>
        <span>
          <i
            className="fa fa-chevron-down"
            style={{ fontSize: "26px", color: "#EA9049" }}
          ></i>
        </span>
        <span>{props.departure.to}</span>
      </div>
      <div className="truck">
        <i
          className="fa fa-truck"
          style={{ color: "#858585", fontSize: "32px" }}
        />
      </div>
      <div className="ship" style={{ fontSize: "26px" }}>
        <NumberFormat
          className="price"
          value={props.departure.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div className="small">
        <div className="quantity">{props.departure.quantity}</div>
      </div>
      <div className=" small rightborder ">
        <div className="dropdown">
          <button
            className="btn"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-ellipsis-v"></i>
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item"  style={{color: 'red'}} onClick={_onClick}>
              <span className="obj">
                <i className="departureE fa fa-trash"></i>
                &nbsp;Delete
              </span>
            </button>
            <Link to={`/edit/${props.departure.id}`} className="dropdown-item">
              <span className="obj">
                <i className="fa fa-edit" />
                &nbsp;Edit
              </span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default connect(
  null,
  { deleteDeparture }
)(Departure);
