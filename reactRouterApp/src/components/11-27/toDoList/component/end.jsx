// 正在进行
import React from 'react';
// 引入公用样式
import './common.scss'
const Pending = () => {
  return (
    <div className='plan_warp'>
      {/* 头部标题 */}
      <h2 className='plan_title'>
        <p>已经完成</p>
        <span>0</span>
      </h2>
      {/* 列表 */}
      <ul className='plan_ul'>
        <li>
          <label>
            <input type="checkbox" />
            <span>我今天已经吃10个包子</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Pending;
