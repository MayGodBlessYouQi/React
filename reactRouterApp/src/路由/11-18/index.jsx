import React, { Component } from 'react';

export class index extends Component {
  constructor() {
    super()
    console.log(this.props)  //错误
  }
  render () {
    React.createElement('li', { className: 'className' }, '元素的内容')
    return (
      <div>

      </div>
    );
  }
}

export default index;
