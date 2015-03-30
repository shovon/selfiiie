import 'fetch';

import events from 'events';
import assign from 'object-assign';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ImagesConstants from '../constants/ImagesConstants';
import ImagesActions from '../actions/ImagesActions';
import imgur from '../helpers/imgur';
import settings from '../settings';
import mongolab from '../helpers/mongolab';

let isReady = false;
let images = {data: []};

let ImagesStore = assign({
  get isReady() {return isReady;},
  set isReady(val) { throw new Error('Not allowed to do that'); },

  get images() {return this._images;},
  set images(val) {throw new Error('Not allowed to do that');},
}, events.EventEmitter.prototype, {

  _images: [],

  emitChange: function () {
    this.emit(ImagesConstants.ON_CHANGE);
  },

  emitReady: function () {
    this.emit(ImagesConstants.ON_READY);
  },

  addReadyListener: function (listener) {
    this.once(ImagesConstants.ON_READY, listener);
  },

  removeReadyListener: function (listener) {
    this.removeListener(ImagesConstants.ON_READY, listener);
  },

  addChangeListener: function (listener) {
    this.on(ImagesConstants.ON_CHANGE, listener);
  },

  removeChangeListener: function (listener) {
    this.removeListener(ImagesConstants.ON_CHANGE, listener);
  }

});

setTimeout(function () {
  mongolab.find(
    settings.mongolab.apikey,
    settings.mongolab.databaseName,
    'posts',
    {
      s: JSON.stringify({_id: -1})
    }
  ).then(function (data) {
    ImagesActions.append(data);
  });
}, 0);

AppDispatcher.register(function (action) {
  switch (action.actionType) {
  case ImagesConstants.IMAGE_CREATE:
    imgur.share(settings.imgur.clientId, action.image)
      .then(function (data) {
        return mongolab.insert(
          settings.mongolab.apikey,
          settings.mongolab.databaseName,
          'posts',
          {imgur: data}
        );
      })
      .then(function (data) {
        ImagesActions.append([data]);
      });
    break;
  case ImagesConstants.APPEND_IMAGES:
    ImagesStore._images = action.images;
    ImagesStore.emitChange();
    if (!isReady) {
      isReady = true;
      ImagesStore.emitReady();
    }
  }
});

export default ImagesStore;
