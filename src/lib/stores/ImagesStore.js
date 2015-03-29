import 'fetch';

import events from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ImagesConstant from '../constants/ImagesConstants';
import imgur from '../helpers/imgur';

let ImagesStore = assign({}, events.EventEmitter.prototype, {

  fetch: function () {
  },

  getState: function () {
    return {
      isReady: false
    }
  }

});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
  case ImagesConstants.IMAGE_CREATE:

  }
});

export default ImagesStore;
