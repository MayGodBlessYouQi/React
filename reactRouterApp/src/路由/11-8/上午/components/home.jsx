import React, { Component } from 'react';
import { NavLink,Route } from 'react-router-dom'
const Left = props => (<div>我是左侧</div>)
const Right = props => (<div>我是右侧</div>)
export default class Home extends Component {
  render() {
		let { path } = this.props.match
		// 如果是 / 说明是第一次进来，没有电导航
		path = path === '/' ? '/home' : path
	return (
		<React.Fragment>
			<div> 我是首页 </div>
		<nav>
			<NavLink to={`${path}/left`}  isActive={(match,location) => {
				//   console.log(match)
				//   console.log(location)
				  if(location.pathname === '/' || match){
					  return true;
				  }else{
					  return false;
				  }
			  }} activeClassName='link_active'>左侧</NavLink>
			<NavLink to={`${path}/right`} activeClassName='link_active'>右侧</NavLink>
		</nav>
		<main>
			<Route path={[`${path}`,'/']} exact component={Left}></Route>
			<Route path={`${path}/left`} component={Left}></Route>
			<Route path={`${path}/right`} component={Right}></Route>
		</main>
		</React.Fragment>
	);
  }
}
