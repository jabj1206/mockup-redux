import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

import { createDeparture } from "../actions/index";

const CreateDeparture = props => {
  const date = new Date();
  const dateToString =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
    ("0" + date.getDate()).slice(-2);   
    
    const hour = ("0"+(date.getHours())).slice(-2)+":"+("0"+(date.getMinutes())).slice(-2);
    

  const initialValues = {
    date: dateToString,
    hour: hour
  };

  const onSubmit = formValues => {
    props.createDeparture(formValues);
  };

  return (
    <div className="col-10 offset-2 card border-light mb-3 shadow p-3 mb-5 bg-white rounded">
      <h3 className="card-header text-center">Create </h3>
      <div className="card-body">
        <Form initialValues={initialValues} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default connect(
  null,
  { createDeparture }
)(CreateDeparture);
