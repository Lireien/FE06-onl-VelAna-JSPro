import cloneDeep from 'lodash/cloneDeep';
const lodashCloneDeep = require('../js/lodashCloneDeep');
test('copy obj to cloneDeep', () =>{
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
  const cloneDeep = lodashCloneDeep(obj);
  expect(cloneDeep).toEqual(obj);
  
})