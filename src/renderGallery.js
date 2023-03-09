import { createElement } from "./createElem";

const galleryWrapper = document.querySelector(".galleryWrapepr");

export function renderGallery(imagesList) {
  galleryWrapper.innerHTML = "";
  let id = 1;
  imagesList.forEach((image) => {
    let pic = createElement({
      element: "img",
      insertionMethod: "append",
      domLocation: galleryWrapper,
      whatClass: "galleryImage",
      id: `image${id++}`,
      src: image,
    });
  });
  document.querySelector("#image1").classList.add("galleryActive");
  let arrowRight = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: galleryWrapper,
    whatClass: "rightArrow",
    text: "►",
  });
  let arrowLeft = createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: galleryWrapper,
    whatClass: "leftArrow",
    text: "◄",
  });

  arrowRight.addEventListener("click", (e) => {
    let currentImg = document.querySelector(".galleryImage.galleryActive");
    if (currentImg.nextSibling.id !== "undefined") {
      console.log(currentImg.nextSibling.id);
      currentImg.classList.remove("galleryActive");
      currentImg.nextSibling.classList.add("galleryActive");
    } else {
    }
  });

  arrowLeft.addEventListener("click", (e) => {
    let currentImg = document.querySelector(".galleryImage.galleryActive");
    if (currentImg.previousSibling !== null) {
      currentImg.classList.remove("galleryActive");
      currentImg.previousSibling.classList.add("galleryActive");
    } else {
    }
  });
}
