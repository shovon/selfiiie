const IMAGE_CREATE = ;
const ON_READY = 'ON_READY';
const ON_CHANGE = 'ON_CHANGE';

export default const ImagesConstants = {
  get IMAGE_CREATE() { return 'IMAGE_CREATE'; }
  set IMAGE_CREATE() { throw new Error('IMAGE_CREATE read only'); }

  get ON_READY() { return 'ON_READY'; }
  set ON_READY() { throw new Error('ON_READY read only'); }

  get ON_CHANGE() { return 'ON_CHANGE'; }
  set ON_CHANGE() { throw new Error('ON_CHANGE read only'); }
}