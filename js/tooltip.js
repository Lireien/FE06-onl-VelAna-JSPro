const methods = Object.getOwnPropertyNames(Array.prototype);
const mutatingMethods = ['copyWithin', 'fill', 'map', 'push', 'pop', 'reverse', 'shift', 'unshift', 'sort', 'splice'];
const nonMutatingMethods = methods.filter(m => typeof Array.prototype[m]).filter(m => !mutatingMethods.includes(m));
//console.log('mut ' + mutatingMethods,'; nonMut ' + nonMutatingMethods);
const mainSectionElement = document.querySelector('#with-tooltip');
const slowSectionElement = document.querySelector('#with-tooltip-slow');

const renderList = (section, listTooltip, data) => {
  const list = document.createElement('li');
  list.dataset.tooltip = listTooltip;
  list.textContent = data;
  section.append(list)
} 
if (mainSectionElement) {
  // debugger;
  const mutatingElement = document.createElement('ul');
  const nonMutatingElement = document.createElement('ul');
  //headers
  const mutatingHeaderElement = document.createElement('h2');
  const nonMutatingHeaderElement = document.createElement('h2');
  mutatingHeaderElement.textContent = 'Mutating methods' ;
  nonMutatingHeaderElement.textContent = 'Non-mutating methods';
  //Insertion
  mutatingElement.prepend(mutatingHeaderElement);
  nonMutatingElement.prepend(nonMutatingHeaderElement);
  mainSectionElement.append(mutatingElement);
  mainSectionElement.append(nonMutatingElement);


  methods.map(m => {
    if (!mutatingMethods.includes(m)){
    renderList(nonMutatingElement, 'non-mutating', m)
        } else {
    renderList(mutatingElement, 'mutating', m)
    
      }
  })
  mainSectionElement.append(mutatingElement);
  mainSectionElement.append(nonMutatingElement);
}

if (!mainSectionElement){
  console.error('nothing found');
}

//tooltip
const tooltipWindow = document.createElement('div');
tooltipWindow.classList.add('tooltip-active');
mainSectionElement.append(tooltipWindow);
methodElements = document.querySelectorAll('li');

const appearingTooltip = (evt) => {
  tooltipWindow.classList.toggle('tooltip-active');
  tooltipWindow.textContent = `${evt.target.dataset.tooltip}`;
}
methodElements.forEach(m => 
  m.addEventListener(mouseover, appearingTooltip));


