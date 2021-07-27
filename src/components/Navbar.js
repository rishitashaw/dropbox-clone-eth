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
          {this.props.account ? <img className='ml-2' width="30" height="30" src={`data:image/png;base64,${new Identicon(this.props.account).toString()}`} /> : <span></span>}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
