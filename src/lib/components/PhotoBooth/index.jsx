import './styles.css!';

import React from 'react';
import TitleBar from '../TitleBar/index.jsx!';
import Camera from '../../helpers/Camera';
import TempImageActions from '../../actions/TempImageActions';
import TempImageStore from '../../stores/TempImageStore';

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
            <div className='waiting-message'>
              <i className='fa fa-camera'></i><br />
              Waiting on camera
            </div>
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

      TempImageStore.addStoreListener(this._onImageStore);
    }
  },

  _onImageStore: function () {
    this.context.router.transitionTo('/editor');
  },

  componentDidUpdate: function () {
    this._handleUpdate();
  },

  componentDidMount: function () {
    this._handleUpdate();
  },

  componentWillUnmount: function () {
    this.state.camera.stop();
    TempImageStore.removeStoreListener(this._onImageStore);
  },

  _takePictureClicked: function () {
    var encodedImage = this.state.camera.snapshot();
    var image = document.createElement('img');
    image.src = encodedImage;
    TempImageActions.storeImage(image);
  }
});

export default PhotoBooth;
