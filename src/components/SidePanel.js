import React from "react";
import SearchBar from "./SearchBar";
import "./styles/sidePanel.css";

const SidePanel = () => {
  return (
    <>
      <div
        className="row  justify-content-center page-title"
        style={{ marginBottom: "10px" }}
      >
        <i className="fas fa-lightbulb" />
        &nbsp; Smart Filters
      </div>
      <div className="row justify-content-around" style={{ marginTop: "10px" }}>
        <i className="fas fa-gift i-filter" />
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </div>
      <div className="row justify-content-around" style={{ marginTop: "10px" }}>
        <i className="fas fa-calendar i-filter" />
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </div>
      <div className="row justify-content-around" style={{ marginTop: "10px" }}>
        <i className="fas fa-heart i-filter" />
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
          </label>
        </div>
      </div>
      <div
        className="row  justify-content-center page-title"
        style={{ marginTop: "10px" }}
      ></div>
      <div className="row">
        <div
          className="col-12 d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          Status
        </div>
        <div className="col-12 " style={{ width: "80%", marginTop: "10px" }}>
          <SearchBar search="searchSide" />
        </div>
      </div>
    </>
  );
};

export default SidePanel;
