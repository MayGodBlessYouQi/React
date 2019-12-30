// 新的API
// bindActionCreator
import React, { Component } from 'react';
// 引入store
import store from './store/index'
import { Provider } from 'react-redux'
// 引入home组键
import Home from './home.jsx'
export class Index extends Component {
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default Index;
