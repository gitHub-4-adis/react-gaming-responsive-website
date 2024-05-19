import React from 'react'
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Nav = () => {
  return (
    <>
      <nav>
        <h1>GAMER's ADDA</h1>
        <ul>
          <li><HashLink to="/#home">Home</HashLink></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><HashLink to="/#about">About</HashLink></li>
          <li><HashLink to="/#brand">Brand</HashLink></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav