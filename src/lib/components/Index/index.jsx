import SnapButton from '../SnapButton/index.jsx!';
import Images from '../Images/index.jsx!';
import React from 'react';

const Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  render: function () {
    return (
      <div className='index'>
        <Images />
        <SnapButton onClick={this._snap} />
      </div>
    );
  },

  _snap: function () {
    this.context.router.transitionTo('/photo-booth');
  }
});

export default Index;