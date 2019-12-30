import React from 'react';
import Son from './son'
// 这里就是写三级路由
import {NavLink,Route} from 'react-router-dom'
const Book = props => {
	const {params,path} = props.match
	// 在动态路由中path和url都可以去拼接地址,但是推荐使用url拼接
	return <div>
		{/* 导航上的地址拼接用url,这样主要是为了地址栏美观 */}
		<h1>{params.id === "1" ? '热门小说' : '新品上架'}</h1>
		<NavLink to={`${path}/11111`}>11111</NavLink>
		<NavLink to={`${path}/22222`}>22222</NavLink>
		{/* 如果我们想在三级路由中获取父级的动态路由值，那么Route上需要用path去拼接 */}
		<Route path={`${path}/:name`} component={Son}/>
	</div>
}

export default Book;