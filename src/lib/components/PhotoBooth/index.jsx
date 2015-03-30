import './styles.css!';

import React from 'react';
import TitleBar from '../TitleBar/index.jsx!';
import Camera from '../../helpers/Camera';

const PhotoBooth = React.createClass({
  getInitialState: function () {
    return {
      camera: new Camera(),
      isSelection: false
    }
  },

  render: function () {
    let topLeftButton = {
      onClick: function () {
        alert('Good');
      },
      iconClass: 'fa fa-arrow-left'
    };
    return (
      <div className='photo-booth'>
        <TitleBar topLeftButton={topLeftButton} titleText="Selfiiie" />
        <canvas ref='canvas' />
        <div className='take-picture-button'>
          <button onClick={this._takePictureClicked}>
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

      let resize = () => {
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height; 
      };

      window.addEventListener('resize', resize);
      resize();

      this.state.camera.render(canvas);
    });
  },

  _takePictureClicked: function () {
    this.state.camera.pause();
    this.setState({
      isSelection: true
    });
  }
});

export default PhotoBooth;
