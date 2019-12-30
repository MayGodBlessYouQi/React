import React from "react";
import { connect } from "react-redux";
import { seveListAction } from "./store/actionCreator";
import { List } from "antd";
const Baidu = props => {
  // value
  let value = "";
  const handleChange = ({ target }) => {
    value = target.value;
  };
  const onSearchInput = ({ keyCode, target }) => {
    if (keyCode === 13) {
      props.onSearch(target.value);
    }
  };
  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <img src="/bd_logo1.png" width="200" alt="" />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <input type="text" onKeyUp={onSearchInput} onChange={handleChange} />
        <button onClick={() => props.onSearch(value)}>搜索</button>
      </div>
      <List
        bordered
        dataSource={props.list}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    onSearch(value) {
      dispatch(seveListAction(value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Baidu);
