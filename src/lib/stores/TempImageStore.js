import events from 'events';
import TempImageStore from '../dispatcher/AppDispatcher';
import TempImageConstants from '../constants/TempImageConstants';

let image;

let TempImageStore = assign({}, events.EventEmitter.prototype, {
  get image() { return image; }
  set image(val) { throw new Error('Not allowed to do that'); }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
  case TempImageConstants.STORE_IMAGE:
    image = action.image;
  }
});
