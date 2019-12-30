import React, { Component } from 'react'
//引入数据
import Data from './data.json'
//引入antd依赖
import { Input } from 'antd';
import { Row, Col } from 'antd';
//引入路由
import { NavLink, Prompt, Route } from 'react-router-dom'
//引入样式
import './index.css'
import Lunbo from './components/lunbo'
//引入图片
import Dingbu from './components/picture/1.png'
import dengru from './components/picture/dengru.png'
import p2 from './components/picture/2.png'
import p3 from './components/picture/3.png'
import p4 from './components/picture/4.png'
import p5 from './components/picture/5.png'
import p6 from './components/picture/6.png'
import b1 from './components/picture/b1.png'
import z1 from './components/picture/z1.png'


export default class Index88 extends Component {
    showtime = data => {
        return data.map((item, index) => {
            return (
                <div key={index} >
                    <div className='float'>
                        <img className='picture' src={item.img} alt="" />
                    </div>
                    <div className='float'>
                        <div style={{ width: '267px' }}>
                            <span className='spant' key={item.id}>{item.label}</span>
                            <p key={index} className='show-p'>{item.conent}</p>
                            <p style={{ color: '#C0C0C0', fontSize: '10px' }}>{item.name}</p>
                        </div>

                    </div>

                </div>
            )
        })
    }
    showtimet = data => {
        return data.map((item, index) => {
            return (
                <div key={index} className='show-boxs'>
                    <div className='float'>
                        <img className='picturet' src={item.img} alt="" />
                    </div>
                    <div className='float-text'>
                        <div style={{ width: '70px' }}>
                            <span key={item.id}>{item.label}</span>
                            <p className='show-p1' >{item.name}</p>
                        </div>

                    </div>

                </div>
            )
        })
    }
    showtimes = data => {
        return data.map((item, index) => {
            return (
                <div key={index} className='fws-show2'>
                    <div>
                        <img className='pictures' src={item.img} alt="" />
                    </div>
                    <div>
                        <div>
                            <span key={item.id}>{item.label}</span>
                            <p style={{ color: '#C0C0C0', fontSize: '10px' }}>{item.name}</p>
                        </div>

                    </div>

                </div>
            )
        })
    }
    render () {
        return (
            <div>
                {/* 顶部 */}
                <header className='header-img'>
                    <img className='index-dingbu' src={Dingbu} />
                    <NavLink to='/Logoin' className='index-dengru'><img src={dengru} alt="" /></NavLink>
                </header>
                {/* 轮播图 */}
                <div>
                    <Lunbo />
                </div>
                {/* 搜索 */}
                <Input placeholder="傲气如我" className='index-input' />
                {/* 导航 */}
                <ul className='index-ui'>
                    <NavLink to='/Fenlei'>
                        <li className='index-li'><img src={p2} alt="" />
                            <span className='span'>分类</span></li>
                    </NavLink>
                    <NavLink to='/Paihang'>
                        <li className='index-li'><img src={p3} alt="" />
                            <span className='span'>排行榜</span></li>
                    </NavLink>
                    <NavLink to='/Fuli'>
                        <li className='index-li'><img src={p4} alt="" />
                            <span className='span'>福利</span></li>
                    </NavLink>
                    <NavLink to='/Show'>
                        <li className='index-li'><img src={p5} alt="" />
                            <span className='span'>新书</span></li>
                    </NavLink>
                    <NavLink to='/Wanben'>
                        <li className='index-li'><img src={p6} alt="" />
                            <span className='span'>完本</span></li>
                    </NavLink>
                </ul>
                {/* 广告 */}
                <div>
                    <img className='guang-img' src="http://qidian.qpic.cn/qidian_common/349573/a7dbb66179a536604da1d9452220873c/0" alt="" />
                </div>
                {/*热门小说 */}
                <div className='show-box'>
                    <div className='hot-box'>
                        <h3><img src={b1} alt="" />热门小说</h3>
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='fws-show1'>
                        {this.showtimet(Data.hot)}
                        {this.showtimet(Data.hot)}
                        {this.showtimet(Data.hot)}
                        {this.showtimet(Data.hot)}
                    </div>
                </div>
                {/* 一品红文 */}
                <div className='show-box'>
                    <div className='hot-box'>
                        <h3><img src={b1} alt="" />一品红文</h3>
                    </div>
                    <span>每日甄选精品好文</span>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                </div>
                {/* 主编推荐 */}
                <div className='show-box'>
                    <div className='hot-box'>
                        <h3><img src={b1} alt="" />主播推荐</h3>
                    </div>
                    <Row>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                    </Row>
                </div>
                {/* 排行榜 */}
                <div className='show-box'>
                    <div className='hot-box'>
                        <h3><img src={b1} alt="" />排行榜</h3>
                    </div>
                    <p className='fws-show3'>热销榜</p>
                    <Row>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        <Col span={6}>{this.showtimes(Data.hot)}</Col>
                    </Row>
                    <p className='fws-show3'>新书榜</p>
                    {this.showtimes(Data.hot)}
                    {/* 榜单 */}
                    <ol className='fws-ol'>
                        <li className='fws-li'>月票榜</li>
                        <li className='fws-li'>推荐榜</li>
                        <li className='fws-li'>礼物榜</li>
                        <li className='fws-li'>点击榜</li>
                    </ol>
                    {/*免费读书  */}
                    <div className='show-box'>
                        <div className='hot-box'>
                            <h3><img src={b1} alt="" />免费读书</h3>
                        </div>
                        <Row>
                            <Col span={6}>{this.showtimes(Data.hot)}</Col>
                            <Col span={6}>{this.showtimes(Data.hot)}</Col>
                            <Col span={6}>{this.showtimes(Data.hot)}</Col>
                            <Col span={6}>{this.showtimes(Data.hot)}</Col>
                        </Row>
                    </div>
                    {/* 广告 */}
                    <div>
                        <img className='guang-img' src="http://qidian.qpic.cn/qidian_common/349573/456d13a3d3c5e30faad586813ab20ff5/0" alt="" />
                    </div>
                    {/*分类推荐 */}
                    <div className='show-box'>
                        <div className='hot-box'>
                            <h3><img src={b1} alt="" />分类推荐</h3>
                        </div>
                        <div className='fws-show4'><img className='fws-img' src={z1} alt="" /></div>
                        <div className='fws-show4'><img className='fws-img' src={z1} alt="" /></div>
                    </div>
                </div>
                {/*新书抢先*/}
                <div className='show-box'>
                    <div className='hot-box'>
                        <h3><img src={b1} alt="" />新书抢先</h3>
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                    <div className='show-boxt'>
                        {this.showtime(Data.hot)}
                    </div>
                </div>
                <Route children={props => {
                    return (
                        <Prompt message={location => {
                            if (location.pathname === '/Paihang') {
                                //从全局里面获取用户的信息，登入信息
                                const user = window.sessionStorage.getItem('user')
                                if (user) {
                                    return true;
                                } else {
                                    alert('尚未登入')
                                    return false

                                }
                            }
                        }} />
                    )
                }} />
            </div>
        )
    }
}