import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import { Button } from 'antd'
export default class Img extends Component {
	render() {
		const { path } = this.props.match
		return (
			<div>
				<nav>
					<NavLink to={`${path}/gif`}>
						<Button>GIF</Button>
					</NavLink>
					<NavLink to={`${path}/HD`}>
						<Button>HD</Button>
					</NavLink>
				</nav>
				<main>
					<Route path={`${path}/gif`} component={() => <div>动态图</div>}></Route>
					<Route path={`${path}/HD`} component={() => <div>高清大图</div>}></Route>
				</main>
			</div>
		);
	}
}
