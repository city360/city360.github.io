import React from "react";
import loginImg from "./login.svg";
import {Button} from "@mui/material";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">注册</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Phone Number</label>
              <input type="text" id="email" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Button variant={"contained"}>
            注册
          </Button>
        </div>
      </div>
    );
  }
}
