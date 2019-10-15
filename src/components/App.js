import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";
import "bootstrap/dist/js/bootstrap.bundle";

// import components

import Home from "./Home";
import Messages from "./Messages";
import Wishlist from "./Wishlist";
import Settings from "./Settings";
import MyAccount from "./MyAccount";
import CreateDeparture from "./CreateDeparture";
import EditDeparture from './EditDeparture'
import NoMatch from "./NoMatch";
import Header from "./Header";

const App = () => {
  return (
    <Router history={history}>
      <div className="container" style={{ marginTop: "50px" }}>
        <Header />
        <div className="row">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/wishlist" exact component={Wishlist} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/account" exact component={MyAccount} />
            <Route path="/new" exact component={CreateDeparture} />
            <Route path="/edit/:id" exact component={EditDeparture} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
