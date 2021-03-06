import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
