import React from 'react';
import { Provider } from 'react-redux'
import store from './11-25/store/index'
import Home from './Home'
const Index = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default Index;
