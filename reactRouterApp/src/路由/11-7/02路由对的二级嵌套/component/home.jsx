import React from 'react'
import { Link, Route } from 'react-router-dom'
export default props => {
	const { path } = props.match
	return (
		<div>
			<h1>我是首页</h1>
			<nav>
				<Link to={`${path}/left`}>左侧</Link>
				<Link to={`${path}/right`}>右侧</Link>
			</nav>
			<main>
				{/* <Route path={`${path}/left`} component={() => <div>左侧</div>}></Route>
				<Route path={`${path}/right`} component={() => <div>右侧</div>}></Route> */}
			</main>
		</div>
	)
}