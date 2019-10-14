import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

import { createDeparture } from "../actions/index";

const CreateDeparture = props => {
  const onSubmit = formValues => {
    props.createDeparture(formValues);
  };

  return (
    <>
      <h3 className="text-center">Create </h3>
      <Form onSubmit={onSubmit} />
    </>
  );
};

export default connect(
  null,
  { createDeparture }
)(CreateDeparture);
