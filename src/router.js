import React from 'react';
import {Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import Products from './routes/Products';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/products" component={Products} />
    </Router>
  );
}

export default RouterConfig;
