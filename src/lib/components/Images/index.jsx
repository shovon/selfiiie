import './styles.css!';

import ImagesStore from '../../stores/ImagesStore';
import React from 'react';

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
    let images = this.state.images || [];
    let imagesComponents = images.map(function (image) {
      let link = image.imgur.data.link;
      return <img src={link.slice(5, link.length)} />;
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
