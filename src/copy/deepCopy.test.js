const deepCopy = require('../js/deepcopy');

test('copy obj to deepObj', () =>{
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
  const deepObj = deepCopy(obj);
  expect(deepObj).toEqual(obj);
  expect(deepObj).not.toBe(obj);
})
