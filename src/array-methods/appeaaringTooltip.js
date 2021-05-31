export default (evt) => {
  const targetElement  = document.querySelector('.tooltip');
  targetElement.style.display = "block";
  targetElement.innerHTML = `${evt.target.dataset.tooltip}`;
  let target = evt.target;
  let coords = target.getBoundingClientRect();

      let left = coords.left + (target.offsetWidth - targetElement.offsetWidth) - 5;
      if (left < 0) left = 0; 

      let top = coords.top - targetElement.offsetHeight - 5;
      if (top < 0) { 
        top = coords.top + target.offsetHeight + 5;
      }

      targetElement.style.left = left + 'px';
      targetElement.style.top = top + 'px';
  
}