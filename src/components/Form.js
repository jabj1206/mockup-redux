import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import history from "../history";

import "./styles/form.css";

class Form extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="invalid-feedback">
          <i className="fa fa-times-circle"/>
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, type, meta }) => {
       const className = `form-control ${meta.error && meta.touched ? 'is-invalid': '' }`
    return (
      <>
        <label>{label}</label>
        <input {...input} type={type} className={className} />
        {this.renderError(meta)}
      </>
    );
  };

  onSubmit=(formValues)=> {
    this.props.onSubmit(formValues)
    history.push("/");
  }

  render() {
   
    return (
      <div className="col-10 offset-2">
        <br />
        <form className="" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-row">
            <div className="form-group col-4">
              <Field
                type="date"
                name="date"
                label="Date"
                component={this.renderInput}
              />
            </div>
            <div className="form-group col-3">
              <Field
                type="time"
                name="hour"
                label="Hour"
                component={this.renderInput}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-5">
              <Field
                type="text"
                name="from"
                label="From"
                component={this.renderInput}
              />
              <small>E.g: Houston, TX, 33619 </small>
            </div>
            <div className="form-group col-5">
              <Field
                type="text"
                name="to"
                label="To"
                component={this.renderInput}
              />
              <small>E.g: Atlanta, GA, 30123 </small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-3">
              <Field
                type="number"
                name="quantity"
                label="Quantity"
                component={this.renderInput}
              />
            </div>
            <div className="form-group col-3">
              <label htmlFor="from">Price</label>
              <Field
                type="number"
                name="price"
                label="Price"
                component={this.renderInput}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.date) {
    errors.date = "You must enter a date";
  }
  if (!formValues.hour) {
    errors.hour = "You must enter an hour";
  }
  if (!formValues.from) {
    errors.from = "You must enter from where is...";
  }
  if (!formValues.to) {
    errors.to = "You must enter to where is...";
  }
  if (!formValues.quantity) {
    errors.quantity = "You must enter quantity";
  }
  if (!formValues.price) {
    errors.price = "You must enter price";
  }

  return errors;
};

export default reduxForm({
  form: "new",
  validate
})(Form);
