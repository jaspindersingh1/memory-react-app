import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className='navbar'>
      <ul>
          <li><a className='brand' href='/'>Memory React App</a></li>
          <li className='middle'>Click an image to begin!</li>
          <li className='score-card'></li>
      </ul>
    </nav>
  );
}

export default Nav;
