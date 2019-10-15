import React from "react";
import Departure from "./Departure";

const Departures = props => {
  return (
    <ul className="list">
      {props.departuresss.map((departure, i) => (
        <Departure departure={departure} key={i} />
      ))}
    </ul>
  );
};

export default Departures;
