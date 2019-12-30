import {
  SEVE_LIST
} from '../actionType/index'


// 1.同步动作
export const seveList = list => {
  return {
    typr: SEVE_LIST,
    list
  }
}

// 2.异步的---动作方法
export const seveListAction = serach => {
  // 在这里我们去请求接口，需要返回的是一个函数而不是
  return (dispatch, getState) => {
    // 这里是接口请求的地方

    // 请求成功之后再用dispatch进行派发
  }
}

// 请求百度接口
export const searchApi = (value) => {
  return new Promise((res, rej) => {
    jsonp('http://suggestion.baidu.com/su?wd=' + value, {
      param: 'cb'
    }, (err, data) => {
      if (err) {
        rej(false);
        // 他是用力包含在哪个一大个噶诶忽而过卡八周年
      } else {
        res(data)
      }
    })
  })
}