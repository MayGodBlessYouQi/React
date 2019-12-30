import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import './index.css'
export default class Index extends Component {
	render() {
		return <BrowserRouter>
			<nav>
				<NavLink to='/home' activeClassName='link_active'>首页</NavLink>
				<NavLink to='/news' activeClassName='link_active'>新闻</NavLink>
			</nav>
			<main>
				<Route>
					<Route path='/home' component={() => <div>我是首页</div>}></Route>
					<Route path='/news' exact component={() => <div>我是新闻页</div>}></Route>
				</Route>
			</main>
		</BrowserRouter>
	}
}
