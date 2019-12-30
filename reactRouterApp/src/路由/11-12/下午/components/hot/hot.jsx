import React, { Component } from 'react';
// 在二级路由里请求小说的目录
import Axios from 'axios'
import { NavLink, Route } from 'react-router-dom'
// 引入内容模板
import Book from '../book/book'
export class Home extends Component {
  constructor() {
    super()
    this.state = {
      navList: []
    }
  }
  componentDidMount () {
    Axios.get('http://localhost:8080/hot').then(res => {
      this.setState({
        navList: res.data.data
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.navList.map(item => {
            return <NavLink to={this.props.match.path + '/' + item.id} key={item.id} >{item.label}</NavLink>
          })
        }
        {/* 动态路由 */}
        <Route path={this.props.match.path + '/:id'} component={Book} />
      </div>
    );
  }
}

export default Home;