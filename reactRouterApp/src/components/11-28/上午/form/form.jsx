import React from 'react';
import { connect } from 'react-redux'
import { Button } from 'antd'
const Form = props => {
  const handleSubmit = () => {
    console.log('提交')
  }
  return (
    <div>
      <div style={{
        width: '300px',
        height: '100px',
        margin: '0 auto',
        border: '1px #432 solid',
        display: props.isShow ? 'block' : 'none',
      }}>
        <h1>{props.loading}</h1>
      </div>
      <Button onClick={handleSubmit}>
        更改
      </Button>
    </div>
  );
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit(){
      dispatch()
    }
  }
}
export default connect(mapStateToProps)(Form);
