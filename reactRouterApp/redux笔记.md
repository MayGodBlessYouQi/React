### redux
- 定义：状态集中管理器
- 3大组成部分：store[createStore]
              reducer[状态的目录]
              action[动作]
- 数据流：单项数据流，因为是单向的，所有才有订阅[subscribe]方法sss
- 分工：
  1. component[组件]
    1.1 初始获取仓库值：store.getState()
    1.2 派发动作[修改仓库值]：store.dispatch(action)
    1.3 订阅者：const unSubscribe = store.subscribe(() => {})
    1.4 取消订阅：unSubscribe()
  2. store[仓库]：
    2.1 引入reducer 使用createStore(reducer) 得到我们的redux仓库
  3. reducer[状态目录]：
    3.1 定义：reducer是一个纯函数，概念是没有第三方依赖，没有异步方法和接口请求，没有额外的数据
    3.2 参数：state只读状态，action操作的动作
      3.2.1 state：因为它是只读的，所以需要克隆一个新的来进行修改，并且返回这个新的状态对象
      3.2.2 action必须要有type属性,我们根据type属性来执行具体的操作
  4. actionTypes[action对象中的type的集合]
    4.1 它是给actionCreators用的，以及reducer里使用
    4.2 目的：集中管理，便于维护
  5. actionCreators[action集合]：
    5.1 它是给组件component用的，因为dispatch是在组件中发起的
    5.2 目的：集中管理，便于维护；我们后期的ajax请求也在这里去写

### 11-22 reducer合并
  1. 语法：combineReducers({reducerA,reducerB})（抗办的瑞丢斯）
  2. combineReducers 返回一个函数，该函数就是一个总的reducer
  3. 使用：在组件中使用getState()取值的时候需要点reducer模块名称 // store.getState().reducerA
  4. 修改：dispatch的时候，没有模块的区别,和正常使用一样
  5. 注意：当一个组件发起dispatch,那么所有的合并里的reducer都会被触发，所以，我们在acctionType里定义的时候尤其要区分模块命名规范

### 11-25 
- 安装：cnpm i -S react-redux
- Provider: 它是托管redux仓库的根容器
  - 它有一个唯一的属性：store：接收redux生成的store对象
  - connect：连接器；将组件和Provider连接，从而获取store里的数据以及操作
    - 1. mapStateToProps：将store里的state映射到该组件的属性里；用来获取仓库数据的；同时它也是订阅；
    - 2. mapDisptchToProps：将派发动作方法映射到该组件的属性里；集中的管理了操作store仓库的方法集合；
    - 3. 忽略传参：connect(null,dispatch)；
### 11-26 bindActionCreators
  - bindActionCreators ：将dispatch和action合并生成一个动作函数，传递给不需要使用redux的组件；
  - 如何安装redux调试器：
    1、 gitHub官网搜索 redux devTool
    2、 谷歌商店安装 redux devTool
    3、 在浏览器安装扩展程序后，需要在代码里安装store的入口文件
    ```js
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers())

    export default store;
    ```
### 11-28 redux中间件的使用
1. 中间件是什么? 他是对redux功能的一种扩展
  1.1. 在actionCreator里使用异步请求时，需要使用的中间件叫：redux-thunk
2. 安装中间件：applyMiddleware();它是redux里专门用来安装各种中间件的工具；并且作为creactStore的第二个参数-
3. 如果需要安装多个中间件或者既有中间件又有调试工具的时候，需要compose()将多个增强器[applyMiddleware]进行合并；同样作为createState的第二个参数使用
4. compose(applyMiddleware(redux-thunk)),...applyMiddleware
5. actionCreator里的具体的使用：
  5.1 首先要有一个同步的action动作，它是用来给咱们异步的action动作使用的
  5.2 异步的action和同步的action唯一的区别就是，它返回的不是对象，而是以函数
  5.3 在异步action中返回的函数上有两个参数；dispatch getstate，他们两个参数是applyMiddleware给注入的；