import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';


const Navigation = () => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <li className="sidebar-brand">
        <Link to="/home" href="/home">JobSeekrs</Link>
      </li>
      <li>
        <Link to="/search" href="/search">Search</Link>
      </li>
      <li>
        <Link to="/enter-a-job" href="/enter-a-job">Enter a Job</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;