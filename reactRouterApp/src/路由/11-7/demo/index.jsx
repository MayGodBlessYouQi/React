import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
// 引入头部组件
import Headbox from './header'
import { Layout } from 'antd';
import './index.css'
import Main from './main'
const { Header, Footer, Content } = Layout;
export default class Index extends Component {
	render() {
		return <Router>
			<Layout>
				<Header>
					<Headbox></Headbox>
				</Header>
				<Content>
					<Main></Main>
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Router>
	}
}
