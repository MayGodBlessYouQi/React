import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
export default class Index extends Component {
	render() {
		return (
			<Router>
				<h2>路由嵌套</h2>
				<nav>
					<Link to='/'>首页</Link>
					<Link to='/about'>关于</Link>
				</nav>
				<main>
					<Route path='/' exact component={() => <div>首页内容</div>}></Route>
					<Route path='/about' component={() => <div>关于我们</div>}></Route>
				</main>
			</Router>
		);
	}
}
