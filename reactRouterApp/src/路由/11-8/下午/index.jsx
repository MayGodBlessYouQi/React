import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
// 引入头部
import Headers from './commin/heade'
// 引入展示区域
import Main from './commin/mian'
export default class Index extends Component {
  render() {
	return (
	  <BrowserRouter>
	  	{/* 头部 */}
	  	<Headers></Headers>
		{/* 展示区 */}
		<Main></Main>
	  </BrowserRouter>
	);
  }
}
