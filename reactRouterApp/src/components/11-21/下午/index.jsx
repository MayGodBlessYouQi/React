import React from 'react';
import store from './store/index'
import { toggle } from './store/actionCreators/index'
const Index = () => {
  const data = store.getState()
  // 切换语言
  const toggLe = ({ target }) => {
    store.dispatch(toggle(target.value))
  }
  return (
    <div>
      <select onChange={toggLe}>
        <option value="cn">中文</option>
        <option value="en">英文</option>
      </select>
      <h1>
        {data.title}
      </h1>
    </div >
  );
}

export default Index;
