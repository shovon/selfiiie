import AppDispatcher from '../dispatcher/AppDispatcher';
import TempImageConstants from '../constants/TempImageConstants';

let TempImageActions = {
  storeImage: function (image) {
    AppDispatcher.dispatch({
      actionType: TempImageConstants.STORE_IMAGE,
      image: image
    });
  }
};

export default TempImageActions;