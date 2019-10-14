import React, { Component } from "react";
import Moment from "react-moment";
import NumberFormat from 'react-number-format';
import './styles/departure.css'

class Departure extends Component {
  render() {
    
    let HyD = `${this.props.departure.date} ${this.props.departure.hour}`;
    return (
      <li style={{marginBottom:'20px'}}>
        <div className="icon">
          <i className="fa fa-check-circle" style={{color:'#EA9049', fontSize:'32px'}} />
        </div>
        <div className="date leftborder">
          <Moment format="dddd">{HyD}</Moment>
          <span>
            <Moment format="Do">{HyD}</Moment> &nbsp;
            <Moment format="hh">{HyD}</Moment>:
            <Moment format="mm">{HyD}</Moment>
          </span>
          <Moment format="A">{HyD}</Moment>
          {/* <FormattedDate value={this.props.departure.date} format="long" /> */}
        </div>
        <div className="plane icon-departure">
          <span style={{marginLeft:'30px'}}>
            <i className="fas fa-location-arrow" />
          </span>
        </div>
        <div className="ship">
          <span>{this.props.departure.from}</span>
          <span>
            <i className="fa fa-chevron-down" style={{fontSize:'26px', color: '#EA9049'}}></i>
          </span>
          <span>{this.props.departure.to}</span>
        </div>
        <div className="truck">
          <i className="fa fa-truck" style={{ color: '#858585', fontSize:'32px' }}></i>
        </div>
        <div className="ship" style={{fontSize:'26px'}}>
          <NumberFormat
            className="price"
            value={this.props.departure.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
        <div className="small">
          <div className="quantity">{this.props.departure.quantity}</div>
        </div>
        <div className=" small rightborder "></div>
      </li>
    );
  }
}

export default Departure;
