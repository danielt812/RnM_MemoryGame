import React from 'react';
import './Nav.css';

const NavBar = props => (
  <ul className='nav nav-pills nav-fill'>
    <li className='nav-item'>
      <h2>
        Score: <span className='rick'>{props.score}</span>
      </h2>
    </li>
    <li className='nav-item'>
      <h2 className='rick'>{props.rightWrong}</h2>
    </li>
    <li className='nav-item'>
      <h2>
        Top Score: <span className='rick'>{props.topScore}</span>
      </h2>
    </li>
  </ul>
);

export default NavBar;
