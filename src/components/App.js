import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

import 'bootstrap/dist/js/bootstrap.bundle'

// import components
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Home from "./Home";
import Messages from "./Messages";
import Wishlist from "./Wishlist";
import Settings from "./Settings";
import MyAccount from "./MyAccount";
import CreateDeparture from "./CreateDeparture";
import NoMatch from './NoMatch'



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row ">
            <div className="col-2 d-flex justify-content-center">
              <div>
                <img src="./logo512.png" alt="" style={{ height: "100px" }} />
              </div>
            </div>
            <div className="col-10">
              <NavBar />
              <div className="row">
                <div className="col-4 offset-8" style={{ marginTop: "20px" }}>
                  <SearchBar/>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/messages" exact component={Messages} />
              <Route path="/wishlist" exact component={Wishlist} />
              <Route path="/settings" exact component={Settings} />
              <Route path="/account" exact component={MyAccount} />
              <Route path="/new" exact component={CreateDeparture} />
              <Route component={NoMatch} />

            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
