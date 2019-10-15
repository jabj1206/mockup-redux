import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

import { listDeparture, updateDeparture } from "../actions/index";

class CreateDeparture extends React.Component {
  componentDidMount() {
    
    this.props.listDeparture(this.props.match.params.id);
  }

  render() {    

    const onSubmit = formValues => {
      this.props.updateDeparture(formValues, this.props.match.params.id)
    };

    return (
      <div className="col-10 offset-2 card border-light mb-3 shadow p-3 mb-5 bg-white rounded">
        <h3 className="card-header text-center">Edit</h3>
        <div className="card-body">
          <Form initialValues={this.props.departure} onSubmit={onSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  departure: state.departures.find
});

export default connect(
  mapStateToProps,
  { listDeparture, updateDeparture }
)(CreateDeparture);
