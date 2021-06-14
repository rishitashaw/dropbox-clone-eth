import React, { Component } from "react";
import Identicon from "identicon.js";
import box from "../box.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark p-0 text-monospace">
        <img src={box} width="30" height="30" className="align-top" alt="" />
        <p className="text-white">Dropbox</p>
        <ul className="navbar-nav px-3">
          <b className="text-white">{"0x0"}</b>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
