import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/home'>首页</NavLink>&nbsp;&nbsp;
        <NavLink to='/news'>新闻</NavLink>
    </nav>
  );
}

export default Header;
