import React from 'react';
import { connect } from 'react-redux'
import { store } from './11-25/store/index'
import { Input } from 'antd'
const Home = props => {
  return (
    <div>
      <h1></h1>
      <Input onChange={({ target }) => {
        setNameAction()
      }} />
      <button onClick={() => {
        console.log(this.input)
      }}>修改</button>
      {props.userName}
    </div>
  );
}
// <div></div>
// 1.mapStateToProps：reducer里的状态到属性
const mapStateToProps = ({ data }) => ({
  userName: data.name
})
// 2. mapDispatchToProps：映射派发方法到组件上的属性
const mapDispatchToProps = dispatch => {
  return {
    //修改名称的动作函数
    setNameAction ({ target }) {
      dispatch(setNameAction(target.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home); // 使用连接器进行连接
