import _ from 'lodash';
import lodashCloneDeep from './lodashCloneDeep';

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
  const cloneDeep = _.cloneDeep(obj);
  expect(cloneDeep).toEqual(obj);
  
})