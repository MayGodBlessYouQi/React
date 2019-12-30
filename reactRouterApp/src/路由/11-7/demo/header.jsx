import React, { Component } from 'react';
import { Input, Menu } from 'antd';
import { NavLink } from 'react-router-dom'
const { Search } = Input;
export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			current: 'All',
		};
	}
	render() {
		return (
			<React.Fragment>
				{/* 搜索框 */}
				<Search
					placeholder="请输入搜索内容"
					onSearch={value => console.log(value)}
					style={{ width: 200 }}
				/>
				{/* 一级导航 */}
				<Menu mode="horizontal">
					<Menu.Item key="All">
						<NavLink to='/all'>All</NavLink>
					</Menu.Item>
					<Menu.Item key="IMAGESS">
						<NavLink to='/img'>IMAGESS</NavLink>
					</Menu.Item>
					<Menu.Item key="Video">
						<NavLink to='video'>Video</NavLink>
					</Menu.Item>
				</Menu>
			</React.Fragment>
		);
	}
}
