const simpleCopy = require('../js/simpleCopy');
test('copy obj to simpleObj', () =>{
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
  const simpleObj = simpleCopy(obj);
  expect(simpleObj).toEqual(obj);
})