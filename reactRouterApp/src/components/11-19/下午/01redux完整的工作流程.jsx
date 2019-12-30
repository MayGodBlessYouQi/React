import React, { Component } from 'react';
/**
 * 1. 创建一个状态库--redux-story
 * 2. 在组件中使用getState()获取仓库的状态值
 * 3. 修改：在组件中使用dispatch(action)派发一个动作到reducer里去，我们在reducer里处理值，然后返回
 * 4. 修改后重新获取值；subscirbe()订阅，获取修改后的值【当reduer里的状态发生了变化，那么subscirbe就会被触发】
 * 生僻的单词：
 * story(斯刀瑞)商店仓库
 * dispatch（迪斯帕斯）派发
 * reducer(瑞达斯) 仓库管理员
 * subscribe(撒布斯奎普)订阅
 */
import story from '../上午/story/index'
console.log(story)
export class Index extends Component {
  constructor() {
    super()
    // 获取state中的状态值
    this.state = {
      story: story.getState()
    }
    // 4. 订阅--subscribe(() => {}) 该方法语法，只接收一个函数
    story.subscribe(() => {
      // 重新获取值
      const newState = story.getState()
      // 这句判断相当于优化
      console.log(newState.name, this.state.story.name)
      if (newState.name !== this.state.story.name) {
        this.setState(newState)
      }
      console.log('reducer的组织发生了更新')
    })
  }
  // 修改story值
  handleChange = () => {
    // 2.修改值--派发一个动作，动作是我们要修改的内容
    const action = {
      // 必须有type类型
      type: 'setName',
      value: '阿涵'
    }
    // 派发--->dispatch,动作-->action
    story.dispatch(action)
  }
  render () {
    console.log('rende触发了')
    const { name } = this.state.story
    return (
      <div>
        <h2>下午学习如何修改状态库</h2>
        <h2>欢迎您！{name}</h2>
        <h2 onClick={this.handleChange}>修改名字</h2>
      </div>
    );
  }
}

export default Index;
