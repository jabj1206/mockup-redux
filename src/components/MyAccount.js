import React from "react";

const MyAccount = () => {
  return (
    <div className="col-10 offset-2 card border-light mb-3 shadow p-3 mb-5 bg-white rounded ">
      <h3 className="card-header text-center ">My Account</h3>
      <div className="card-body">
        <form>
          <div className="offset-3">
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-3">
                <input type="email" class="form-control" id="inputPassword" />
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-3">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted text-center" >
        <button className="btn btn-primary" >Login</button>
      </div>
    </div>
  );
};

export default MyAccount;
