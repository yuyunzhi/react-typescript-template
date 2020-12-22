import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';
import * as serviceWorker from './serviceWorker';
import ViewsRoot from './views/Root'
import Provider from './store/index'
import 'antd/dist/antd.css';

ReactDOM.render(
      <Provider>
        <ViewsRoot />
      </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
