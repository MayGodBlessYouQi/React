import React from 'react';
import { Button, Input } from 'antd'
const Child = props => {
  let value = ''
  const pushItem = () => {
    props.pushitem(value)
  }
  // 接收ips值
  const handleChange = ({ target }) => {
    value = target.value
  }
  // 删除一条
  const deleteItem = () => {
    props.deleteitem()
  }
  return (
    <div>
      <Input onChange={handleChange} />
      <Button onClick={pushItem}>添加一条</Button>
      <Button onClick={deleteItem}>删除一条</Button>
    </div>
  );
}

export default Child;
