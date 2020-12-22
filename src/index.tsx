import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import * as serviceWorker from './serviceWorker';
import ViewsRoot from './views/Root';
import Provider from './store/index';
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider>
    <ViewsRoot />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
