const homeSet = new Set(['nap', 'pan', 'apn', 'pna']);
const sortedArray = Array.from(homeSet).map(i=>i);

function addedToSet(sortedArray){
const letters = sortedArray.join('').split('');
const newHomeSet = new Set(letters);
return newHomeSet;
}
console.log(addedToSet(sortedArray));

function addedToMap(sortedArray){
const homeMap = new Map();
let data = [];
sortedArray.forEach(item => data.push(item.split('').sort().join('')));
for (let item of data) {
  homeMap.set(item, item)
}

return homeMap;
}
console.log(addedToMap(sortedArray));