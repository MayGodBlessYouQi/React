import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './component/home'
import About from './component/about'
export default class Index extends Component {
	render() {
		return (
			<Router>
				<h2>路由嵌套</h2>
				<nav>
					<Link to='/home'>首页</Link>
					<Link to='/about'>关于</Link>
				</nav>
				<main>
					<Route path='/' exact component={Home}></Route>
					<Route path='/home' component={Home}></Route>
					<Route path='/about' component={About}></Route>
				</main>
			</Router>
		);
	}
}
