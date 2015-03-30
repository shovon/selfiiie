const ImagesConstants = {
  get IMAGE_CREATE() { return 'IMAGE_CREATE'; },
  set IMAGE_CREATE(value) { throw new Error('IMAGE_CREATE read only'); },

  get ON_READY() { return 'ON_READY'; },
  set ON_READY(value) { throw new Error('ON_READY read only'); },

  get ON_CHANGE() { return 'ON_CHANGE'; },
  set ON_CHANGE(value) { throw new Error('ON_CHANGE read only'); }
};

export default ImagesConstants;