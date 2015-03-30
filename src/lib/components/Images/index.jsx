import './styles.css!';

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

  componentWillUnmount: function () {
    ImagesStore.removeReadyListener(this._onReady);
    ImagesStore.removeChangeListener(this._onChange);
  },

  render: function () {
    var images = this.state.images || [];
    var imagesComponents = images.map(function (image) {
      return <img src={image.imgur.data.link} />;
    });
    return (
      <div className='images'>
        {
          this.state.isReady ?
            <div>{imagesComponents}</div> :
            <div>Loading</div>
        }
        <div className='bottom-padding'></div>
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
      images: ImagesStore.images
    });
  }
});

export default Images;
