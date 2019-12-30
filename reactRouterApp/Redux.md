# api:

- createStore:创建仓库的实例方法
- combineReducer：{object}合并多个 reducer 的方法
- applyMiddleWare: 它是安装中间件的方法
- compose：合并多个中间件
- bindActionCreators:合并派发和动作

# 通过 createStore 创建出来的对象 store 对象上的方法

- 1. getState():获取 store 中的数据
- 2. dispatch():派发要修改数据的动作对象
- 3. subScribe():订阅者，当 reducer 中发生了变化，该函数会被触发

### react-redux

## 定义：react 官方出的，用来配合 redux 进行友好处理的；

# api

- Provider:托管 store 的根容器，如果有路由的话，路由根容器也必须包含在该组件里；
- Provider 的参数：store
- connect：连接器，用来将组件和仓库连接起来的高级函数
- 语法：connect(mapStateToProps,mapDispatchToProps)(Com)
- 在 connect 里，我们的第一个参数全称是：mapStateToProps，它是将 store 仓库的 state 映射到该组件的属性上；并且它还是订阅者，当 store 发生了改变，那么它会重新获取 store 里的数据
- connect 里第二个参数：
  mapDispatchToProps:它是将我们派发的动作方法，集中管理在这个函数中，并且返回
- connect 里有第三个参数：mergeProps，该参数同样是一个函数，需要返回一个对象，该函数接收三个参数分别是：stateProps，dispatchProps,ownProps;它的用途是将该组件上所有的属性全部获取到。

### redux-thunk：处理 action 中异步请求的

## 语法：普通的 actionCreators 返回的就是一个对象，而处理异步的则返回一个函数，该函数会被 applyMiddleWare 传入两个参数：dispatch 和 getState；

### redux 的工作流程--原理

# 有组件发起一个动作，经过动作创建者派发到仓库，仓库会携带本次动作对象和上一次的 state 到 reducer 里去，reducer 根据 action 动作对象返回一个新的 state 到仓库里，仓库再将新的状态返回给组件；

### redux 目录结构：

- /store:根
- /reducers:reducer 集合
- /actionTypes:动作类型集合
- /acitonCreators:动作集合
- /index.js:创建仓库的入口文件
