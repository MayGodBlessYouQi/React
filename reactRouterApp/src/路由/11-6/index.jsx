import React, { Component } from 'react';
import './index.css'
// 路由引入
import { BrowserRouter, Link, Route } from 'react-router-dom'
// 引入导航组件
import Home from './home'
import Other from './home2'
// BrowserRouter：路由根容器---底层是history封装
// 属性：basename 表示路由的根路径，一般用于打包后的二级目录
// getUserConfirmation 页面刷新时和第一次打开时执行,接收一个回调函数
// forceRefresh 当为true时,路由跳转会使页面整体刷新
// Link：导航---被渲染成a标签
// 属性：to <string> 表示要跳转的地址
//       to <object> : pathname 要跳转的地址，search 地址栏传参，hash 地址栏带#号，state 在路由js中携带过去的状态值
// Route：路线---匹配导航地址，渲染对应对的内容属性；path 匹配地址栏地址的
// component 用来加载组件的，切记，它只接收两种格式的数据：class 和 函数
// render 用来加载组件的,只接收一个函数组件，只有当地址匹配到的时候才渲染
// children 也是用来加载组件的，只接收一个函数组件，不管匹配与否都渲染
// 权重：component > render > children
// 注意：在一个路由程序里，尽量使用一种加载组件的方式,不要混用
export default class Index extends Component {
	render() {
		return (
			<BrowserRouter
				basename='dist'
			>
				<h1>今天开始路由</h1>
				<nav>
					<Link to={{
						pathname: '/',
						search: '?name=杨迪&age=20岁',
						hash: '#jon=梁永琪',
						state: {
							$: 1000000000000,
							id: 45678
						}
					}} className='nav-item'>首页</Link>
					<Link to='/other' className='nav-item'>其他</Link>
				</nav>
				<main>
					<Route path='/' exact={true} component={Home}></Route>
					<Route path='/other' component={Other}></Route>
				</main>
			</BrowserRouter>
		);
	}
}
