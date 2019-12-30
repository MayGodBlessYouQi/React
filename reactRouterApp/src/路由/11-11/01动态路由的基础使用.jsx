import React from 'react';
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
const Book = props => {
	console.log(props)
	return <h1>
		小说
	</h1>
}
// 父组件
const Index = () => {
	return (
		<BrowserRouter>
			<NavLink to='/book/1/100'>无限恐怖</NavLink>&nbsp;&nbsp;
			<NavLink to='/book/2/100'>明朝那些事</NavLink>&nbsp;&nbsp;
			<NavLink to='/book/3/100'>流氓天尊</NavLink>
			{/* 星号表示通配符，动态路由是 /:key */}
			<Route path={'/book/:id/:index'} component={Book}/>
		</BrowserRouter>
	);
}

export default Index;
