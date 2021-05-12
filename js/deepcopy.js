function simpleCopy(obj){
    const copyObj = {};
    
    for (key in obj){
      copyObj[key] = obj[key]
    }
    return copyObj;
  }


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
const newObj = simpleCopy(obj);
console.log(newObj === obj);

function roughCopy(obj){
const copyObj = JSON.parse(JSON.stringify(obj));
return copyObj;
}
const roughObj = roughCopy(obj);
console.log(roughObj === obj);

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
console.log(deepObj === obj);