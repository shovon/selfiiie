import 'font-awesome/css/font-awesome.css!';
import './styles.css!';

import React from 'react';

let SnapButton = React.createClass({
  render: function () {
    return (
      <div className='snap-button'>
        <button onClick={this.props.onClick}>
          <i className='fa fa-camera'></i>
        </button>
      </div>
    );
  }
});

export default SnapButton
