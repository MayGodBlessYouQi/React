import React from 'react';
// 引入仓库
import { connect } from 'react-redux'
const Index = props => {
  return (
    <div>
      {props.content || '我是新闻666'}
    </div>
  );
}
// 1.获取state数据
const mapStateToProps = state => state.NewsReducer;
export default connect(mapStateToProps)(Index);
