import imagesStore from '../../stores/imagesStore';

import React from 'react';

const EMPTY_MESSAGE =
  'Looks like you\u2019re the first one here! Take a selfie!';

let ImagesView = React.createClass({
  render: function () {
    return (
      <div>
        {
          imagesStore.getState().isReady ?
            <div>TODO: Implement this</div> :
            <div>Loading</div>
        }
      </div>
    );
  }
});

export default ImagesView;
