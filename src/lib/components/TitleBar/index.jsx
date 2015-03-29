import './styles.less';

import React from 'react';

export default const TitleBar = React.createClass({
  render: function () {
    let components = [];
    if (this.props.topLeftButton) {
      components.push(
        <button onClick={this.props.topLeftButton.onClick}>
          <i className={this.props.topLeftButton.iconClass}></i>
        </button>
      );
    }
    if (this.titleText) {
      components.push(
        <h2>{this.props.titleText}</h2>
      );
    }
    return (
      <div className='title-bar'>{components}</div>
    );
  }
});