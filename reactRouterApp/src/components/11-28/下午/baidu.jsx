import React from 'react';
import { Input, Button } from 'antd'
import { connect } from 'react-redux'
import './index.scss'
const Baidu = props => {
  // value
  let value = '';
  const handleChange = ({ target }) => {
    value = target.value
  }
  return (
    <div>
      <img src='https://www.baidu.com/img/bd_logo1.png' alt='百度' width='300' height='179' style={{ textAlign: 'center' }} className='img' />
      <div className='ss'>
        <Input style={{ width: '400px' }} onChange={handleChange} />
        <Button onClick={() => props.onSearch(value)}>百度一下</Button>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    onSearch (value) {
      console.log(value)
      // dispatch(seveListAction(value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Baidu);
