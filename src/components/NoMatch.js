import React, { Component } from "react";
const NoMatch = ({ location }) => (
  <h3 className="text-center">
    No match for <code>{location.pathname}</code>
  </h3>
);

export default NoMatch;
