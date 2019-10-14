import React from "react";
import "./styles/searchBar.css";
import { connect } from "react-redux";
import { search } from "../actions/index";

class SearchBar extends React.Component {
  render() {
    const {search } = this.props
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              className="form-control text-center"
              placeholder="&#xf002; Search"
              onChange={e => {
                search(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { search }
)(SearchBar);
