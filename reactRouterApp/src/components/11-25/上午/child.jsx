/**
 * 作为子组件，需要使用拦截器，获取父级的组件托管的store的值
*/
import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
const Child = props => {
  console.log(props)
  return <div>
    <h2>我是子组件</h2>
    <hr/>
    今天要学的是：{props.name}、{props.msg}
    <hr/>
    <Button onClick={mapStateToProps}>修改名称</Button>
  </div>
}

// 2.给connect方法的第二个参数；映射派发动作到组件的属性上
const mapStateToProps = reducer => {
  // 必须要有返回值
  // 返回出来的对象都会被合并到props里,因为data自身是个对象,所以它里面的属性都会被合并到porps对象里
  return reducer.data;
}
const mapDispatchToProps = () => {
  // 必须要有返回值,这样它才能合并到props里
  return {
    setNameAction(){
      const action = {
        type:'setNameAction',
        value:'123456'
      }
      console.log(action)
    },
    setMsgAction(){
      console.log('设置信息的')
    }
  }
}

// 使用连接器暴露出去我们的子组件
export default connect(mapStateToProps,mapDispatchToProps)(Child)