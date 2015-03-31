import './styles/normalize.css!';

import React from 'react';
import Router from 'react-router';
import App from './components/App/index.jsx!';
import Index from './components/Index/index.jsx!';
import PhotoBooth from './components/PhotoBooth/index.jsx!';
import Editor from './components/Editor/index.jsx!';

let { Route, DefaultRoute } = Router;

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Index} />
    <Route name='photo-booth' handler={PhotoBooth} />
    <Route name='editor' handler={Editor} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.querySelector('#main'));
});
