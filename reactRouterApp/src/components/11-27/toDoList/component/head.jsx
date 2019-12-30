// 头部内容
import React from 'react';
// 引入样式
import './head.scss'
import { connect } from 'react-redux'
import { addItem } from '../store/actionCreate/index'
const Head = props => {
  console.log('props的值为：', props)
  const handleEnter = ({ keyCode, target }) => {
    // 当我们判断回车就触发动作
    if (keyCode === 13) {
      props.setNameAction(target.value)
    }
  }
  return (
    <header className='common_header flex'>
      <h1>TODOLIST</h1>
      <input type="text" onKeyDown={handleEnter} />
    </header>
  );
}
const mapStateToProps = state => state.demo
const mapDispatchToProps = dispatch => {
  return {
    setNameAction () {
      dispatch(addItem)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Head);
