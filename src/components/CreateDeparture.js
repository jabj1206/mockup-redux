import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from './Form'

import {createDeparture, createDepartures} from '../actions/index'

class CreateDeparture extends Component {
  onSubmit = formValues => {
    this.props.createDeparture(formValues)    
  };

  render() {
    return (
      <>
      <h3 className='text-center'>Create </h3>
        <Form onSubmit={this.onSubmit}/>
      </>
    );
  }
}

export default connect(null, {createDeparture, createDepartures})(CreateDeparture);