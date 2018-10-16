import React from "react";
import "./Nav.css";

const NavBar = props => (
  <ul className="nav nav-pills nav-fill">
    <li className="nav-item">
      <h2>Score: {props.score}</h2>
    </li>
    <li className="nav-item">
      <h2>You guessed {props.rightWrong}</h2>
    </li>
    <li className="nav-item">
      <h2>Top Score: {props.topScore}</h2>
    </li>
  </ul>
);

export default NavBar;
