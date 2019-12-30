import React, { Component } from "react";
// book组件就是模板组件；根据不同的id值请求小说内容
import axios from "axios";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      id: this.props.match.params.id
    };
  }
  // 请求接口
  queryData = id => {
    axios.get("http://localhost:8080", { params: { id } }).then(res => {
      this.setState({
        text: res.data.data.content,
        id: this.props.match.params.id
      });
    });
  };
  // 挂载完成
  componentDidMount () {
    // 在页面第一次加载的时候就需要请求
    this.queryData(this.props.match.params.id);
  }
  // 更新完成
  componentDidUpdate () {
    // 如果当前id和上次的id是一样的，就不要请求了
    if (this.props.match.params.id !== this.state.id) {
      this.queryData(this.props.match.params.id);
    }
  }
  // 渲染
  render () {
    return <div dangerouslySetInnerHTML={{ __html: this.state.text }} />;
  }
}

export default Book;