import React, { Component } from 'react';
import { Provider } from 'react-redux'
import From from './form/form'
export class Index extends Component {
  render () {
    return (
      <Provider>
        <From />
      </Provider>
    );
  }
}

export default Index;
