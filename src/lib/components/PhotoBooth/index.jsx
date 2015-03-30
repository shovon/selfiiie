import './styles.css!';

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
      <div className='photo-booth'>
        <TitleBar topLeftButton={topLeftButton} titleText="Selfiiie" />
        <canvas ref='canvas' />
        <div className='take-picture-button'>
          <button>
            <i className='fa fa-camera'></i>
          </button>
        </div>
      </div>
    );
  },

  componentDidMount: function () {
    this.state.camera.requestCamera((err) => {
      if (err) {
        throw err;
      }

      let canvas = React.findDOMNode(this.refs.canvas);

      window.addEventListener('resize', () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      });

      let width = window.innerWidth;
      let height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      this.state.camera.render(canvas);
    });
  }
});

export default PhotoBooth;
