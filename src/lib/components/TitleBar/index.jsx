import './styles.css!';

import React from 'react';

const TitleBar = React.createClass({
  render: function () {
    let components = [];
    if (this.props.topLeftButton) {
      components.push(
        <button onClick={this.props.topLeftButton.onClick}>
          <i className={this.props.topLeftButton.iconClass}></i>
        </button>
      );
    }
    if (this.props.titleText) {
      components.push(
        <h2>{this.props.titleText}</h2>
      );
    }
    if (this.props.topRightButton) {
      components.push(
        <button
          className='top-right'
          onClick={this.props.topRightButton.onClick}>
          <i className={this.props.topRightButton.iconClass}></i>
        </button>
      );
    }
    return (
      <div className='title-bar'>{components}</div>
    );
  }
});

export default TitleBar;
