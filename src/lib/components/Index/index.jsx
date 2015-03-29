import SnapButton from '../SnapButton/index.jsx!';
import ImagesView from '../ImagesView/index.jsx!';

import React from 'react';

let Index = React.createClass({
  render: function () {
    return (
      <div className='index'>
        <ImagesView />
        <SnapButton onClick={function () { alert('Clicked') }} />
      </div>
    );
  }
});

export default Index;
