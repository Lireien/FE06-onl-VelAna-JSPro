import _ from 'lodash';
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
const lodashCloneDeep = _.cloneDeep(obj);
export default lodashCloneDeep;

