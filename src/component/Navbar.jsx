import React from 'react';

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">React</div>
        <ul className="nav-links">
          <div className="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li className="services">
            <a href="/">Services</a>
            <ul className="dropdown">
                <li><a href="/">Dropdown 1 </a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 2</a></li>
                <li><a href="/">Dropdown 3</a></li>
                <li><a href="/">Dropdown 4</a></li>
            </ul>
            </li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Contact</a></li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;