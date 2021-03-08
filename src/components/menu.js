import React from 'react';

import gokulPng from '../images/gokul.png';

import '../styles/menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <a href="/" className="logo">
        <img src={gokulPng} alt="Gokulakrishnan Kalaikovan" />
      </a>
      <ul className="menu-list">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/book">Book</a>
        </li>
        <li>
          <a href="/uses">Uses</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
