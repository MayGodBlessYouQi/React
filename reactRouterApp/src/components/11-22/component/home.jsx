import React from 'react';

const Home = () => {
  // 数据包
  let arr = [
    { id: 1, name: '小红' },
    { id: 2, name: '小名' },
    { id: 3, name: '小粉' },
    { id: 4, name: '老王' }
  ]
  return (
    <div>
      <button onClick={() => {
        // 数组中的find方法是查找数据中具体的值,返回值就是具体的值
        // 数组中的findeIndex是查找该数组在数组中具体的下表的
        const index = arr.findIndex(item => item.name === '老王')
      }}>查找</button>
      <button onClick={() => {
        // 先找到数据
        // 把数据修改
        // 把数据替换回去
        const index = arr.findIndex(item => item.name === '老王')
        law, name = '小王'
        arr[index] = law
        console.log(arr)
      }}>改</button>
    </div>
  );
}

export default Home;
