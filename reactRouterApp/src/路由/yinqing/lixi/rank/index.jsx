import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { NavLink, Route } from 'react-router-dom';
import './rank.scss'
import Hot from './hot.jsx'
import New from './new.jsx'
import Finish from './finish.jsx'

export default class Rank extends Component {
    render () {
        return (
            <div>
                <div>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => { this.props.history.replace('/') }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >排行榜</NavBar>
                </div>


                <nav className='rank-nav'>
                    <NavLink to='/Paihang/hot' className='rank-link'>
                        热销榜
                    </NavLink>
                    <NavLink to='/Paihang/new' className='rank-link'>
                        新书榜
                    </NavLink>
                    <NavLink to='/Paihang/finish' className='rank-link'>
                        完本榜
                    </NavLink>
                </nav>

                <main className='rank-main'>
                    <Route path='/Paihang/hot' component={Hot} />
                    <Route path='/Paihang/new' component={New} />
                    <Route path='/Paihang/finish' component={Finish} />
                </main>
            </div>
        )
    }
}
