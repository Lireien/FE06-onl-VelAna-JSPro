function roughCopy(obj){
  const copyObj = JSON.parse(JSON.stringify(obj));
  return copyObj;
  }
  
  export default roughCopy;