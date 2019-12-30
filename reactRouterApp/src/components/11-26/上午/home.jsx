import React from 'react';
import { connect } from 'react-redux'
// 如何让子组件在不知道redux的情况下操作仓库
import { bindActionCreators } from 'redux'
import { SHUIGUOS, DELETEINPUT } from './store/actionCreate/index'
import Child from './Child'
const Home = props => {
  // 1.参数：（动作对象，dispatch）
  // 如果传入的是一个对象则可已一次绑定多个函数
  const pushitem = bindActionCreators(SHUIGUOS, props.dispatch)
  // 删除一个
  const deleteItem = bindActionCreators(DELETEINPUT, props.dispatch)
  return (
    <div>
      <Child pushitem={pushitem} deleteitem={deleteItem} />
      {
        props.list.map(item => {
          return <p key={item.id}>{item.label}</p>
        })
      }
    </div>
  );
}
const mapStateToPoprs = state => state;
export default connect(mapStateToPoprs, null)(Home);
