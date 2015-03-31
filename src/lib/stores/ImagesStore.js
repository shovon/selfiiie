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

  // Change

  emitChange: function () {
    this.emit(ImagesConstants.ON_CHANGE);
  },

  addChangeListener: function (listener) {
    this.on(ImagesConstants.ON_CHANGE, listener);
  },

  removeChangeListener: function (listener) {
    this.removeListener(ImagesConstants.ON_CHANGE, listener);
  },

  // Sent

  emitSent: function () {
    this.emit(ImagesConstants.ON_EMIT);
  },

  addSentListener: function (listener) {
    this.on(ImagesConstants.ON_CHANGE, listener);
  },

  removeSentListener: function (listener) {
    this.removeListener(ImagesConstants.ON_CHANGE, listener);
  },

  // Ready

  emitReady: function () {
    this.emit(ImagesConstants.ON_READY);
  },

  addReadyListener: function (listener) {
    // TODO: avoid using once.
    this.once(ImagesConstants.ON_READY, listener);
  },

  removeReadyListener: function (listener) {
    this.removeListener(ImagesConstants.ON_READY, listener);
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
        ImagesStore.emitSent();
        ImagesActions.append([data]);
      });
    break;
  case ImagesConstants.APPEND_IMAGES:
    // Dictionaries are perfect for implementing set unions.
    let newImagesHash = {}
    let eachCallback = (val) => {
      newImagesHash[val._id.$oid] || (newImagesHash[val._id.$oid] = val);
    }

    ImagesStore._images.forEach(eachCallback);
    action.images.forEach(eachCallback);

    let newImages = Object.keys(newImagesHash).map((key) => newImagesHash[key]);

    ImagesStore._images = newImages;

    ImagesStore.emitChange();
    if (!isReady) {
      isReady = true;
      ImagesStore.emitReady();
    }
  }
});

export default ImagesStore;
