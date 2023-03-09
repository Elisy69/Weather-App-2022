import { createElement } from "./createElem";
const detailsWindow = document.querySelector("#detailsWindow");
const nowWindow = document.querySelector("#nowWindow");
const overlay = document.querySelector("#overlay");

export function loading() {
  overlay.classList.add("active");
  const load = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: overlay,
    whatClass: "loader",
  });
}

export function stopLoading() {
  overlay.classList.remove("active");
  overlay.innerHTML = "";
}
