export default (section, listTooltip, data) => {
  const list = document.createElement('li');
  list.dataset.tooltip = listTooltip;
  list.textContent = data;
  section.append(list)
}