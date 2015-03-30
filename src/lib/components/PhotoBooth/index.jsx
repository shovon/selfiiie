import React from 'react';
import TitleBar from '../TitleBar/index.jsx!';
import Camera from '../../helpers/Camera';

const PhotoBooth = React.createClass({
  getInitialState: function () {
    return {
      camera: new Camera()
    }
  },

  render: function () {
    let topLeftButton = {
      onClick: function () {
        alert('Good');
      },
      iconClass: 'fa fa-arrow-left',
    };
    return (
      <div>
        <TitleBar topLeftButton={topLeftButton} titleText="Selfiiie" />
        <canvas ref='canvas' />
        <button>
          <i className='fa fa-camera'></i>
        </button>
      </div>
    );
  },

  componentDidMount: function () {
    this.state.camera.requestCamera((err) => {
      if (err) {
        throw err;
      }

      let canvas = React.findDOMNode(this.refs.canvas);

      window.addEventListener

      let width = window.innerWidth;
      canvas.width = width;
      canvas.height = width;
      this.state.camera.render(canvas);
    });
  }
});

export default PhotoBooth;
