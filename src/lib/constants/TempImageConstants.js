let TempImageConstant = {
  get STORE_IMAGE() { return 'STORE_IMAGE'; },
  set STORE_IMAGE(value) { throw new Error('STORE_IMAGE read only'); },

  get ON_STORE() { return 'ON_STORE'; },
  set ON_STORE(value) { throw new Error('ON_STORE read only'); }
};

export default TempImageConstant;
