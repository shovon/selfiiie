import ImagesStore from '../../stores/ImagesStore';
import React from 'react';

const EMPTY_MESSAGE =
  'Looks like you\u2019re the first one here! Take a selfie!';

const Images = React.createClass({
  getInitialState: function () {
    return {
      isReady: ImagesStore.isReady,
      images: ImagesStore.images
    }
  },

  componentDidMount: function () {
    if (!ImagesStore.isReady) { ImagesStore.addReadyListener(this._onReady); }
    ImagesStore.addChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        {
          this.state.isReady ?
            <div>TODO: Implement this</div> :
            <div>Loading</div>
        }
      </div>
    );
  },

  _onReady: function () {
    this.setState({
      isReady: true
    });
  },

  _onChange: function () {
    this.setState({
      images: ImagesStores.images
    });
  }
});

export default Images;
