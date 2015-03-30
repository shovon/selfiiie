import AppDispatcher from '../dispatcher/AppDispatcher';
import ImagesConstants from '../constants/ImagesConstants';

let ImagesActions = {
  createImage: function (image) {
    AppDispatcher.dispatch({
      actionType: ImagesConstants.IMAGE_CREATE,
      image: image
    });
  },
  append: function (metadata) {
    AppDispatcher.dispatch({
      actionType: ImagesConstants.APPEND_IMAGES,
      images: metadata
    })
  }
};

export default ImagesActions;
