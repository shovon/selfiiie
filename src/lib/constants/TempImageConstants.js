let TempImageConstant = {
  get STORE_IMAGE() { return 'STORE_IMAGE'; },
  set STORE_IMAGE(value) { throw new Error('STORE_IMAGE read only'); }
};

export default TempImageConstant;
