import React from 'react'

import { NavLink } from 'react-router-dom'
import './css/header.css'
export default () => {
	return <header>
		<nav>
			<NavLink to='/' className='link' activeClassName='link_active' exact>首页</NavLink>
			<NavLink to='/news' activeClassName='link_active'>新闻</NavLink>
			<NavLink to='/login'>登录</NavLink>
		</nav>
	</header>
}