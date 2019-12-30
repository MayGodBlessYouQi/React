import React from 'react';
// 引入仓库
import { connect } from 'react-redux'
import { setHomeAction } from './store/actionCreates/home'
const Index = props => {
  return (
    <div>
      {props.content || '我是首页666'}
      <button onClick={props.setNameAction('首页是我')}>改变</button>
    </div>
  );
}
// 1.获取state数据
const mapStateToProps = state => state.HomeReducer;

// 2.修改
const mapDispatchToProps = dispatch => {
  return {
    setNameAction (data) {
      // 修改内容
      dispatch(setHomeAction(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
