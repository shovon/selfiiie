import events from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import TempImageConstants from '../constants/TempImageConstants';
import assign from 'object-assign';

let image;

let TempImageStore = assign({
  get image() { return image; },
  set image(val) { throw new Error('Not allowed to do that'); }
}, events.EventEmitter.prototype, {
  addStoreListener: function (listener) {
    this.once(TempImageConstants.ON_STORE, listener);
  },

  removeStoreListener: function (listener) {
    this.removeListener(TempImageConstants.ON_STORE, listener);
  },

  emitStore: function (listener) {
    this.emit(TempImageConstants.ON_STORE);
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
  case TempImageConstants.STORE_IMAGE:
    image = action.image;
    TempImageStore.emitStore();
  }
});

export default TempImageStore;
