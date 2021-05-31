import roughCopy from './roughCopy';
test('copy obj to roughObj', () =>{
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
  const roughObj = roughCopy(obj);
  expect(roughObj).toEqual(obj);
})