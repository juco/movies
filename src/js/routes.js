import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';
import App from 'containers/App';
import HomePage from 'containers/HomePage';
import AboutPage from 'containers/AboutPage';


const routes = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <Route path="home" component={HomePage} />
        <Route path="about" component={AboutPage} />

        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>
)

export default routes;
