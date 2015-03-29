import 'fetch';

import events from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ImagesConstants from '../constants/ImagesConstants';
import imgur from '../helpers/imgur';
import settings from '../settings';
import mongolab from '../helpers/mongolab';

let isReady = false;
let images = [];

let ImagesStore = assign({}, events.EventEmitter.prototype, {

  get isReady() {return isReady;},
  set isReady(val) { throw new Error('Not allowed to do that'); },

  get images() {return images;},
  set images(val) {throw new Error('Not allowed to do that');},

  emitChange: function () {
    this.emit(ImagesConstants.ON_CHANGE, listener);
  },

  addReadyListener: function (listener) {
    this.once(ImagesConstants.ON_READY, listener);
  },

  addChangeListener: function (listener) {
    this.on(ImagesConstants.ON_CHANGE, listener);
  },

  removeChangeListener: function (listener) {
    this.removeListener(ImagesConstants.ON_CHANGE, listener);
  }

});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
  case ImagesConstants.IMAGE_CREATE:
    imgur.share(settings.imgur.clientId, action.image)
      .then(function (data) {
        return mongolab.insert(
          settings.mongolab.apikey,
          settings.mongolab.database,
          'posts',
          {imgur: data}
        );
      })
      .then(function () {
        ImageStore.emitChange();
      });
    break;
  }
});

export default ImagesStore;
