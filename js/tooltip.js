const methods = Object.getOwnPropertyNames(Array.prototype);
const mutatingMethods = ['copyWithin', 'fill', 'map', 'push', 'pop', 'reverse', 'shift', 'unshift', 'sort', 'splice'];
const nonMutatingMethods = methods.filter(m => typeof Array.prototype[m]).filter(m => !mutatingMethods.includes(m));
//console.log('mut ' + mutatingMethods,'; nonMut ' + nonMutatingMethods);
const mainSectionElement = document.querySelector('#with-tooltip');
const bodyElement = document.querySelector('body');

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
const tooltipElement = document.createElement('div');
tooltipElement.classList.add('tooltip');
mainSectionElement.append(tooltipElement);
methodElements = document.querySelectorAll('li');

const appearingTooltip = (evt) => {
  tooltipElement.style.display = "block";
  tooltipElement.innerHTML = `${evt.target.dataset.tooltip}`;
  let target = evt.target;
  let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - tooltipElement.offsetWidth) - 5;
      if (left < 0) left = 0; 

      let top = coords.top - tooltipElement.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElement.style.left = left + 'px';
      tooltipElement.style.top = top + 'px';
  
}
const fadingTooltip = (evt) => {
  tooltipElement.style.display = "none";
}
methodElements.forEach(m => {
  m.addEventListener('mouseover', appearingTooltip)});
methodElements.forEach(m =>{
  m.addEventListener('mouseout', fadingTooltip)
});

