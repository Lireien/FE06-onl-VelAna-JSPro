function roughCopy(obj){
  const copyObj = JSON.parse(JSON.stringify(obj));
  return copyObj;
  }
  
  module.exports = roughCopy;