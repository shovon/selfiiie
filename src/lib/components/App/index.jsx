import './styles.css!';

import React from 'react';
import Router from 'react-router';

let { RouteHandler } = Router;

let App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <RouteHandler />
      </div>
    );
  }
});

export default App;
