import React, { Component } from 'react'
//引入数据
//引入antd依赖
//引入样式
import './index.css'
//引入组件
import Fenlei from './components/home'
import Paihang from '../../lixi/rank/index'
import Show from './components/show'
// 登录
import Logoin from './components/login/index.jsx'
// 梁永琪
import Fuli from '../../liangyongqi/index'
import Wanben from './components/wanben'
import Index88 from './index.jsx'
//引入路由
import { BrowserRouter, Route } from 'react-router-dom'
export default class Index extends Component {
    render () {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Index88} />
                <Route path='/Fenlei' component={Fenlei} />
                <Route path='/Paihang' component={Paihang} />
                <Route path='/Show' component={Show} />
                <Route path='/Logoin' component={Logoin} />
                <Route path='/Fuli' component={Fuli} />
                <Route path='/Wanben' component={Wanben} />
            </BrowserRouter>
        )
    }
}
