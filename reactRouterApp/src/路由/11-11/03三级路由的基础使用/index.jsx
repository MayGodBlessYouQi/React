import React from 'react';
import { BrowserRouter,NavLink,Route } from 'react-router-dom'
// 子组件
import Book from './book'
// 父组件
const Index = () => {
	return (
		<BrowserRouter>
			<NavLink to='/book/1'>小说1</NavLink>
			<NavLink to='/book/2'>小说2</NavLink>
			<NavLink to='/book/3'>小说3</NavLink>
			<Route path='/book/:id' component={Book}></Route>
		</BrowserRouter>
	);
}

export default Index;
