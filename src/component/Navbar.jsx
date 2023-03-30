import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar">

    <div class="logo">React</div>
    <ul class="nav-links">
      <div class="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li class="services">
         <a href="/">Services</a>
         <ul class="dropdown">
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