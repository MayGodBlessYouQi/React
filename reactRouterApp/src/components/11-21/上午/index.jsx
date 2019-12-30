import React from 'react';
import story from './story/index.js'
import { setHomeNameAction } from './story/actionCreators/index'
console.log(setHomeNameAction)
const Index = () => {
  const handleSetName = () => {
    // 2. 派发动作
    story.dispatch(setHomeNameAction('北京工商管理专修学院'))
  }
  // 1.获取值
  const { home } = story.getSate()
  return (
    <div>
      <h2>
        {home.name}已经有{home.yer}
      </h2>
      <button onClick={handleSetName}>修改名称</button>
    </div>
  );
}

export default Index;
