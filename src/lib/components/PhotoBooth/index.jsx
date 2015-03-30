import './styles.css!';

import React from 'react';
import TitleBar from '../TitleBar/index.jsx!';
import Camera from '../../helpers/Camera';
import ImagesActions from '../../actions/ImagesActions';

const PhotoBooth = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      camera: new Camera()
    }
  },

  _topLeftButtonClick: function () {
    this.context.router.transitionTo('/');
  },

  render: function () {
    let topLeftButton = {
      onClick: this._topLeftButtonClick,
      iconClass: 'fa fa-arrow-left'
    };
    return (
      <div className='photo-booth'>
        <TitleBar topLeftButton={topLeftButton} titleText="Selfiiie" />
        {
          this.state.camera.gotCamera ?
            <div>
              <canvas ref='canvas' />
              <div className='take-picture-button'>
                <button onClick={this._takePictureClicked}>
                  <i className='fa fa-camera'></i>
                </button>
              </div>
            </div> :
            <div className='waiting-message'>Still waiting on camera.</div>
        }
      </div>
    );
  },

  _handleUpdate: function () {
    if (!this.state.camera.gotCamera) {
      this.state.camera.requestCamera((err) => {
        if (err) {
          throw err;
        }

        this.forceUpdate();
      });
    } else {
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
    }
  },

  componentDidUpdate: function () {
    this._handleUpdate();
  },

  componentDidMount: function () {
    this._handleUpdate();
  },

  componentWillUnmount: function () {
    this.state.camera.stop();
  },

  _takePictureClicked: function () {
    var encodedImage = this.state.camera.snapshot();
    this.state.camera.stop();
    var image = document.createElement('img');
    image.src = encodedImage;
    ImagesActions.createImage(image);
  }
});

export default PhotoBooth;
