import AppDispatcher from '../dispatcher/AppDispatcher';
import TempImageConstants from '../constants/TempImageConstants';

let TempImageAction = {
  storeImage: function (image) {
    AppDispatcher.dispatch({
      actionType: TempImageConstants.STORE_IMAGE,
      image: image
    });
  }
};

export default TempImageConstants;