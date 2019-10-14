import React from "react";
import "./styles/searchBar.css";

class SearchBar extends React.Component {

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="&#xf002; "  />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
