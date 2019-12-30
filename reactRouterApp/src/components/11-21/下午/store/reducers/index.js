import {
  TOGGLE
} from '../actionTypes/index'

const initState = {
  // 语言包
  cn: {
    title: '今天我真高兴！今天周四了'
  },
  en: {
    title: `I'm so happy today! It's Thursday`
  },
  // 选中的默认
  lg: 'cn'
}

export default (state = initState[initState.lg], action) => {
  // 克隆一份state
  // const newState = JSON.parse(JSON.stringify(state))
  // 判断
  switch (action.type) {
    // state的值取决与我们return出去的最终值，而不是在函数里赋予的默认值
    // 切到中文/英文
    case TOGGLE:
      initState.lg = action.value
      return initState[initState.lg]

    default:
      // 默认返回的就是中文
      return state;
  }
}