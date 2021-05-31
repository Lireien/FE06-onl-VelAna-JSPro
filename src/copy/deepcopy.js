const obj = {
  a:1,
  b:3,
  weather:`sunny`,
  meth:
    { 
      m:5,
      p: 'deep', 
      r: 'copy' }
};

function deepCopy(obj){
  const copyObj = {};
  for(const i in obj) {
    if (obj[i] instanceof Object) {
      copyObj[i] = deepCopy(obj[i]);
    }
    copyObj[i] = obj[i];
  }
  return copyObj;
}
const deepObj = deepCopy(obj);

module.exports = deepCopy;