import React from 'react'
// 凡是被线路【Route】加载出来的组件【class/fn】，路由信息都被存到props里了
export default props => {
	console.log(props)
	return <div>
		<h2>在路由里，只能由一个路由根容器，所有的导航和路由都必须包含在这个路由根容器里</h2>
	</div>
}