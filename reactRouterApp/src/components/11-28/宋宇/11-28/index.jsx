import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import Baidu from "./baidu";

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Baidu />
      </Provider>
    );
  }
}

export default Index;
