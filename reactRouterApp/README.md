### 路由的基本格式

- BrowserRouter：路由根容器---底层是 history 封装
- 属性：basename 表示路由的根路径，一般用于打包后的二级目录
- getUserConfirmation 页面刷新时和第一次打开时执行,接收一个回调函数
- forceRefresh 当为 true 时,路由跳转会使页面整体刷新
- Link：导航---被渲染成 a 标签
- 属性：to <string> 表示要跳转的地址
  to <object> : pathname 要跳转的地址，search 地址栏传参，hash 地址栏带#号，state 在路由 js 中携带过去的状态值
- Route：路线---匹配导航地址，渲染对应对的内容属性；path 匹配地址栏地址的
- component 用来加载组件的，切记，它只接收两种格式的数据：class 和 函数
- render 用来加载组件的,只接收一个函数组件，只有当地址匹配到的时候才渲染
- children 也是用来加载组件的，只接收一个函数组件，不管匹配与否都渲染
- 权重：component > render > children
- 注意：在一个路由程序里，尽量使用一种加载组件的方式,不要混用

### 11-7 路由匹配原理

1. 匹配模式：贪婪模式：只要包含就会被匹配到，想精确匹配需要给基线路添加 exact 属性

### 11-8 NavLink

1. NavLink：一个特殊的 link，当匹配成功时会添加样式；link 上有的特性 NavLink 都有

2. 属性：exact 精确匹配，解决的也是贪婪模式下匹配多个的问题；
   activeClassName：指定一个选中时高亮的样式类名
   activeStyle：指定高亮时的内联样式
   isActive：【很重要】当我们需要额外的对导航进行绑定高亮样式时，此属性接收一个函数，该函数接收两个参数，第一个是 match，如果 match 不为 null，则表示地址栏匹配到了该导航；第二个是 location，它里面有一个 pathname 属性，表示当前地址栏的路径，一般用来做判断；
   isActive 属性里的函数必须要有返回值，true 表示被选中,false 表示不被选中；

### 11-11 动态路由

- 定义：一个 Route 动态匹配到多个导航地址
- 语法：<Route path='/path/:id'>
- 注意：动态路由里导航地址的拼接用 url,线路地址用 path 拼接
- 获取值：在 props.match.params 对象里


### 11-12
- Prompt 它是我们react路由里的拦截器组件
- 参数：
  1. when={bool}：为false的时候则Prompt组件不会执行,true的时候才会执行
  2. message={String|fn}：string的时候就是提示内容,默认表现形式是alert弹框，一般我们不用这种写法，采用function的形式用组件去弹出；fn接收两个参数，第一个是location，第二个是action；location对象是准备进入的下V一个路由数据，一般用它来做判断；action表示本次跳转路由的动作类型：path、replace等
  注意：message如果接收的是一个函数，那么该函数必须返回bool值，false表示禁止路由跳转，true就是正常
  3. 使用场景：
    3.1、在一个填写表单的页面中，如果用户未完成表单，此时跳转路由、就需要提示用户是否跳转；用于优化用户体验；
    3.2、在一些需要权限对的页面，如果用户不符合要求，则进入该页面时需要做权限判断及拦截
  4. Prompt触发的时机：当用户离开该路由页面的时候，通俗的讲就是用户行为导致的路由改变，Prompt才会触发；


### 11-13
  - Route外部跳转
  1. 非路由组件是没有路由信息，那么我们需要使用js控制其路由行为有两种解决办法：
    1.1 使用路由的withRouter高级方法，将非留有组件包裹；withRouter(myComponent)，使用之后该组件拥有路由的所有特征，路由信息，路由声明周期
    1.2 使用路由容器BrowserRouter进行实例化，会得到实例化后的路由对象，该对象里有localtion,基本上满足路由的使用【可选】
  - Route重定向 
  -2.1 Redirect
    属性：to:<string|object>:string表示要重定向的地址：object是和NavLink上to属性写的参数一样；
    属性：from:<string>：表示地址栏里的地址，匹配到了之后会执行对应的to属性地址进行重定向，需要注意的是from属性必须在Switch组件中才会有效
    概念：重定向是当用户访问一个连接的时候，由程序控制用户最终访问的地址：比如说比如说用户访问www.webpack.com我们用重定向给用户跳转到webpack.cn：这个动作就叫重定向；

### 11-14
  - 1. BrowserRouter 有哪些属性，分别是什么？
      basename 路由的基本网址
      getUserConfirmation:用于路由确认，只在页面刷新时执行，接受一个自执行函数
      forceRefresh:bool 控制页面刷新,true刷新，默认是false
  - 2. 一个路由项目中是否可以有多个BrowserRouter?
      不可以，因为不符合规范，如果有多个会导致一些隐藏的问题或BUG，比如拦截器就会失效
  - 3. NavLink上的属性由哪些？to 属性值分别有哪些？
      答：to跳转的地址，activeClassName：选中后的样式；activeStyle：选中后的内联样式，isAction：接收一个函数，用来额外控制是否选中，exact精确匹配，strict：匹配前后斜杠，replace：默认为false表示向历史记录添加一条，为true的时候则替换掉当前历史记录中的地址
      to属性接收两种值：字符串表示跳转的地址；对象里可配置：pathname,serach,hash,state
  - 4. 重定向 Redireact 和 Switch 关系？
      重定向上的from刷新必须在Switch组件里才会生效；还有，多个重定向也是必须在Switch里才会各自有效；
  - 5. react 路由匹配规则？路由拦截器是什么？
      从上而下，贪婪模式；<Prompt>
  - 6. Route 是干什么的？有哪些属性？渲染方式有几种？
      Route是用来匹配地址栏的线路，匹配成功后加载组件
      path,[component,render,children],exact
  - 7. 什么是重定向？
      重定向是用户访问连接的时候，由程序控制用户最终访问的地址
  - 8. Switch 执行原理（匹配规则）？
      自上而下，匹配到第一个就立即渲染，其余的将不再匹配
  - 9. 拦截器的属性分别是什么？
      Prompt:when控制Prompt是否执行,true表示执行，false表示禁用
      message：字符串：提示的一句话，以alert弹窗的形式表现
      message: 函数：location | action,location里包含的信息时下一个要进入的路由信息，action表示本次跳转的动作类型【push|replace】
  - 10. 路由对的三大组成部分?
      BrowserRouter、NavLink、Route
  - 11. Link和NavLink区别?
      当导航被激活的时候，也就是说地址栏地址是我们导航上的to的值时，NavLink会添加高亮的样式，而Link没有；
  - 12. 什么是动态路由，语法？
      语法：<Route path={`/path/:key`} />
  - 13. 非路由组件怎么获取路由信息？
      使用WithRouter包裹非路由组件

### 安装redux
- cnpm i -S redux

### 动态路由
- 定义：一个线路能够匹配多个地址，语法是/:key
- 路由嵌套需要在子路由页面里导航和线路需要使用来自与match和dispatch