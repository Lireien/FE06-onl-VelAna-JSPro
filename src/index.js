import "./style.css";
// import createList from './array-methods/createList';
import createTable from './array-methods/createTable';
import appearingTooltip from './array-methods/appeaaringTooltip';
import fadingTooltip from './array-methods/fadingTooltip';


const mainSectionElement = document.querySelector('#with-tooltip');
if (mainSectionElement){
  createTable();
} else{
  console.error('nothing found');
}

const tooltipElement = document.createElement('div');
tooltipElement.classList.add('tooltip');
mainSectionElement.append(tooltipElement);
const methodElements = document.querySelectorAll('li');

methodElements.forEach(m => {
  m.addEventListener('mouseover', appearingTooltip)});
methodElements.forEach(m =>{
  m.addEventListener('mouseout', fadingTooltip)
});