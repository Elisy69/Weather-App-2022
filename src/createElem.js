export const createElement = ({
  element,
  insertionMethod,
  domLocation,
  whatClass,
  text,
  id,
  value,
  src,
}) => {
  const el = document.createElement(element);
  domLocation[insertionMethod](el);
  el.classList.add(whatClass);
  el.textContent = text;
  el.id = id;
  el.value = value;
  el.src = src;
  return el;
};
