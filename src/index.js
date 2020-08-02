import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import FoodDescription from './component/FoodDecription';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Route exact component={App} path="/" />
        <Route exact component={FoodDescription} path="/:id" />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
