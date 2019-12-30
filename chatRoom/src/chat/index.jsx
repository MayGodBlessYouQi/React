import React from 'react';
import Axios from 'axios';

import { subscribeToTimer } from './api/subscribeToTimer';

class App extends React.Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = { timestamp: 'no timestamp yet' }
  btn = () => {

    // const setAxios = Axios.create({
    //   baseURL: `http://${window.location.hostname}:8888`
    // });

    // // 登录的api请求
    // const setApi = () => {
    //   let value = {
    //     username: 'gly',
    //     password: '123456'
    //   }
    //   return setAxios.post("/login", value);
    // }
    // // 处理返回的函数
    // setApi().then(res => {
    //   console.log(res)
    // })
  }
  render () {
    return (
      <div>
        <button onClick={this.btn}>点击</button>
        <h1>This is the timer value: {this.state.timestamp}</h1>
      </div>
    );
  }
}


export default App;