import './styles/normalize.css!';

import React from 'react';
import Router from 'react-router';
import App from './components/App/index.jsx!';
import Index from './components/Index.jsx!';

let { Route, DefaultRoute } = Router;

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.querySelector('#main'));
});
