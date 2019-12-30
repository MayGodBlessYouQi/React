import React, { Component } from 'react';
import Axios from 'axios'
export class Book extends Component {
  constructor() {
    super()
    this.state = {
      content: ''
    }
  }
  componentDidMount () {
    Axios.get('http://localhost:8080/hot/text', {
      params: { id: this.props.match.params.id }
    }).then(res => {
      this.setState({
        content: res.data.content
      })
    })
  }
  render () {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}

export default Book;
