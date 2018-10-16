import React from "react";
import "./JumboTron.css";

const JumboTron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Rick and Morty Memory Game!</h1>
      <h2 className="lead">
        Click on a character to earn points, but don't click on the same
        character more than once!
      </h2>
    </div>
  </div>
);

export default JumboTron;
