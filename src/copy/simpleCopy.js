export default (obj) => {
  const copyObj = {};
  let key;
  
  for (key in obj){
    copyObj[key] = obj[key]
  }
  return copyObj;
}

