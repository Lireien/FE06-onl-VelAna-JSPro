function simpleCopy(obj){
  const copyObj = {};
  
  for (key in obj){
    copyObj[key] = obj[key]
  }
  return copyObj;
}
module.exports = simpleCopy;
