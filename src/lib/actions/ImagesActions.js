import AppDispatcher from '../dispatcher/AppDispatcher';
import ImagesConstants from '../constants/ImagesConstants';

let ImagesActions = {
  createImage: function (image) {
    AppDispatcher.dispatch({
      actionType: ImagesConstants.IMAGE_CREATE,
      image: images
    });
  }
};

export default ImagesActions;
