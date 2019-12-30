import React from "react";
import { connect } from "react-redux";
import { submitAction } from "./store/actionCreators";

const Form = props => {
  return (
    <div>
      <h1>
        {props.userInfo.username}:{props.userInfo.age}岁
      </h1>
      <div
        style={{
          width: 300,
          height: 100,
          border: "1px solid red",
          margin: "auto",
          display: props.isShow ? "block" : "none"
        }}
      >
        <h1>{props.loading}</h1>
      </div>
      <button onClick={props.handleSubmit}>提交</button>
    </div>
  );
};
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit() {
      dispatch(submitAction({ username: "阿涵", age: "20" }));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
