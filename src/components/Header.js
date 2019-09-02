import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import logo from "../logo.png"; // Tell Webpack this JS file uses this image

const Header = () => {
  const style = { width: "100px" };

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <img src={logo} alt="Streamy Logo" style={style} />
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>

        <div className="item">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
