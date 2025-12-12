import { set } from "mongoose";
import React, { Component } from "react";
class ClassBasedComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ravi",
      password: "admin@123",
      updatedName: "",
      updatedPassword: "",
    };
  }
  handler = () => {
    this.setState({
      name: this.state.updatedName,
      password: this.state.updatedPassword,
    });
  };

  render() {
    return (
      <div class="class-based">
        <h1
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          States in CBC
        </h1>

        <h4 className="text-center bg-success-subtle p-2 m-5">
          Default Details
        </h4>
        <h3>Name : {this.state.name}</h3>
        <h3>Password: {this.state.password}</h3>
        <hr />
        <div className="row mx-5">
          <div className="col">
            <label htmlFor="">
              <strong>Name:</strong>{" "}
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              placeholder="enter name to update"
              onChange={(e) => {
                this.setState({ updatedName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="row mx-5 my-3">
          <div className="col">
            <strong>Password:</strong>
          </div>
          <div className="col-9">
            <input
              type="password"
              placeholder="Enter password to updated"
              onChange={(e) => {
                this.setState({ updatedPassword: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="row m-5">
          <button className="btn btn-primary" onClick={this.handler}>
            <strong>Click here to change Details</strong>
          </button>
        </div>
      </div>
    );
  }
}

export default ClassBasedComponent;