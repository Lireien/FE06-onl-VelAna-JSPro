const homeSet = new Set(['nap', 'pan', 'apn', 'pna']);
const sortedArray = Array.from(homeSet).map(i=>i);
const letters = sortedArray.join('').split('');
const newHomeSet = new Set(letters);
console.log(newHomeSet);