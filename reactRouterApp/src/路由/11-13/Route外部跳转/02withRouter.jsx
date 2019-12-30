import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

const Header = props => {
  console.log(props)
  return (
    <nav>
      <NavLink to='/home'>首页</NavLink>&nbsp;&nbsp;
      <NavLink to='/news'>新闻</NavLink>
    </nav>
  );
}

export default withRouter(Header);