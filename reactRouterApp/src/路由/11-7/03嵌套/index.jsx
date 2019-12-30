import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
export default class Index extends Component {
	render() {
		return <BrowserRouter>
			<nav>
				<Link to={{
					pathname: '/',
					search: '?name=内心强大无坚不摧'
				}}>首页</Link>
				<Link to='/about'>关于</Link>
			</nav>
			<main>
				<Route path='/' exact component={Home}></Route>
				<Route path='/about' component={About}></Route>
			</main>
		</BrowserRouter >
	}
}
