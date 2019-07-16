// 根文件
// import "core-js/stable";
// import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';

import { isLogin } from './utils/auth';
import { configureStore, history } from './redux/store/index';
import Root from './containers/base/Root';

// global styles
// import 'antd/dist/antd.less';
import './style/lib/animate.css';
import './style/antd/index.less';
import './style/index.less';
import './app.less';

// import '@babel/polyfill';


if (process.env.NODE_ENV === 'development') {
  // dev 模式开启mock
  require('./mock/index.js');

  console.log('current mode is debug, mock is enabled');
}

const store = configureStore();

render(
  <Root
    store={store}
    history={history}
    isLogin={isLogin}
  />,
  document.getElementById('root')
);