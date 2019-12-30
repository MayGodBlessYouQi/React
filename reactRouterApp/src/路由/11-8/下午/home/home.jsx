import React from 'react'

export default props => {
	const userInfo = JSON.parse(window.sessionStorage.getItem('user')) || {username:'暂无登录'}
	if (userInfo.username === '暂无登录') {
		props.history.replace('/login')
	}
	return (
		<div>
			<h1>我是首页</h1>
			<h2>下午好：{userInfo.username}</h2>
		</div>
	)
}