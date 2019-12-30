import React from 'react';

import { Provider } from 'react-redux'
import store from './store/';
import Baidu from "./baidu";
const Index = () => {
  return (
    <Provider store={store}>
      <Baidu />
    </Provider>
  );
}

export default Index;
