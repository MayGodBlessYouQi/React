import React, { Component } from 'react';
import { BrowserRouter as Router,NavLink,Route } from 'react-router-dom'
import Home from './components/home'
import Other from './components/other'
import './css/index.css'
export default class Index extends Component {
  render() {
	return (
	  <Router>
		  <nav>
			  <NavLink to='/' exact activeClassName='link_active'>首页</NavLink>
			  <NavLink to='/other' activeClassName='link_active'>其他</NavLink>
		  </nav>
		  <main>
			  <Route path='/' exact component={Home}></Route>
			  <Route path='/other' component={Other}></Route>
		  </main>
	  </Router>
	);
  }
}
