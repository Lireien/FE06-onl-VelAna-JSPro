import createList from './createList';

export default () => {
const methods = Object.getOwnPropertyNames(Array.prototype);
const mutatingMethods = ['copyWithin', 'fill', 'map', 'push', 'pop', 'reverse', 'shift', 'unshift', 'sort', 'splice'];
const nonMutatingMethods = methods.filter(m => typeof Array.prototype[m]).filter(m => !mutatingMethods.includes(m));
const mainSectionElement = document.querySelector('#with-tooltip');


const mutatingElement = document.createElement('ul');
  const nonMutatingElement = document.createElement('ul');
  //headers
  const mutatingHeaderElement = document.createElement('h2');
  const nonMutatingHeaderElement = document.createElement('h2');
  mutatingHeaderElement.classList.add('mutating');
  nonMutatingHeaderElement.classList.add('non-mutating');
  mutatingHeaderElement.textContent = 'Mutating methods' ;
  nonMutatingHeaderElement.textContent = 'Non-mutating methods';
  //Insertion
  mutatingElement.prepend(mutatingHeaderElement);
  nonMutatingElement.prepend(nonMutatingHeaderElement);
  mainSectionElement.append(mutatingElement);
  mainSectionElement.append(nonMutatingElement);


  methods.map(m => {
    if (!mutatingMethods.includes(m)){
    createList(nonMutatingElement, 'non-mutating', m)
        } else {
    createList(mutatingElement, 'mutating', m)
    
      }
  })
  mainSectionElement.append(mutatingElement);
  mainSectionElement.append(nonMutatingElement);

}