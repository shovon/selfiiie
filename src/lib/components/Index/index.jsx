import SnapButton from '../SnapButton/index.jsx!';
import Images from '../Images/index.jsx!';

import React from 'react';

export default const Index = React.createClass({
  render: function () {
    return (
      <div className='index'>
        <Images />
        <SnapButton onClick={function () { alert('Clicked') }} />
      </div>
    );
  }
});
