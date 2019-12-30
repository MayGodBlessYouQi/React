import React, { Component } from 'react';
import All from './components/all'
import Img from './components/img'
import Video from './components/video'
import { Route } from 'react-router-dom'
export default class Main extends Component {
	render() {
		return (
			<div>
				<Route path='/all' component={All}></Route>
				<Route path='/img' component={Img}></Route>
				<Route path='/video' component={Video}></Route>
			</div>
		);
	}
}
