import React from "react";

import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="row ">
      <div className="col-2 d-flex justify-content-center">
        <div>
          <img src="./logistic.png" alt="" style={{ height: "100px" }} />
        </div>
      </div>
      <div className="col-10">
        <NavBar />
        <div className="row">
          <div className="col-4 offset-8" style={{ marginTop: "20px" }}>
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
