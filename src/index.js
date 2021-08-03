import React from 'react';
import ReactDOM from 'react-dom';
import {NewPaperApp} from './NewPaperApp';
import AppRouter from './routers/AppRouter'
import store from './store/store'
import {Provider} from 'react-redux'
import './index.css';

ReactDOM.render(

  <Provider store={store}>
    <NewPaperApp />
  </Provider>,
  document.getElementById('root')
);
