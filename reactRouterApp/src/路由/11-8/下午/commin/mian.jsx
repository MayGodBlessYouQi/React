import React from 'react'

import {Route} from 'react-router-dom'
import Login from '../login/login'
import Home from '../home/home'
import News from '../mews/mews'
export default () => {
	return (
		<main>
			<Route path='/' exact component={Home}></Route>
			<Route path='/news' component={News}></Route>
			<Route path='/login' component={Login}></Route>
		</main>
	)
}