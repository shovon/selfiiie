import './styles.css!';

import TempImageStore from '../../stores/TempImageStore';
import TitleBar from '../TitleBar/index.jsx!';
import React from 'react';
import imageutils from '../../helpers/imageutils';
import ImagesActions from '../../actions/ImagesActions';
import ImagesStore from '../../stores/ImagesStore';

let effects = [
  {
    name: 'None',
    fn: imageutils.effects.none
  },
  {
    name: 'B&W',
    className: 'black-and-white',
    fn: imageutils.effects.blackAndWhite
  },
  {
    name: 'Sepia',
    className: 'sepia-tone',
    fn: imageutils.effects.sepiaTone
  }
];

const Editor = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      image: TempImageStore.image,
      selectedEffect: 0
    }
  },

  render: function () {
    let topLeftButton = {
      onClick: this._topLeftButtonClick,
      iconClass: 'fa fa-arrow-left'
    };

    let topRightButton = {
      onClick: this._topRightButtonClick,
      iconClass: 'fa fa-send'
    };

    return (
      <div className='editor'>
        <TitleBar
          topLeftButton={topLeftButton}
          titleText="Selfiiie"
          topRightButton={topRightButton} />
        <canvas ref='canvas' />
        <ul>
          {effects.map((effect, i) =>
            <li
              data-custom-attribute={i.toString()}
              key={i.toString()}
              onClickCapture={this._listClick}>
              <div className={effect.className}>{' '}</div>
              {effect.name}
            </li>
          )}
        </ul>
      </div>
    );
  },

  _listClick: function (event) {
    let attr = event.currentTarget.getAttribute('data-custom-attribute');
    if (attr) {
      this.setState({
        selectedEffect: attr
      });
    }
  },

  _topLeftButtonClick: function () {
    this.context.router.transitionTo('/photo-booth');
  },

  _topRightButtonClick: function () {
    ImagesStore.addSentListener(() => {
      this.context.router.transitionTo('/');
    });
    ImagesActions.createImage(
      imageutils.createImageDOMElement(React.findDOMNode(this.refs.canvas))
    );
  },

  componentDidMount: function () {
    this._handleUpdate();
  },

  _handleUpdate: function () {
    if (!TempImageStore.image) {
      this.context.router.transitionTo('/photo-booth');
      return;
    }

    let canvas = React.findDOMNode(this.refs.canvas);

    let resize = () => {
      let width = window.innerWidth;
      let height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      let context = canvas.getContext('2d');

      effects[this.state.selectedEffect].fn(
        context,
        TempImageStore.image,
        TempImageStore.image.width,
        TempImageStore.image.height
      );
    };

    window.addEventListener('resize', resize);
    resize();
  },

  componentDidUpdate: function () {
    this._handleUpdate();
  }
});

export default Editor;
