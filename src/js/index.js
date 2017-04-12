import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import configureStore from './store/configureStore.js';
import App from './containers/root.js';
import '../css/root.less';

// let store = configureStore();

render(
 // <Provider store={store}>
    <App />
//  </Provider>
  ,
  document.getElementById('container')
);