import { createElement } from "./createElem";
import defaultImg from "./images/unnamed.png";
import { getCities } from "./loaclStorage";

export function defaultLoad() {
  const temp = document.querySelector(".temperature");
  const cityName = document.querySelector(".currentCity");
  const weatherIcon = document.querySelector(".weatherImg");
  const detailsWindow = document.querySelector("#detailsWindow");
  const heartButton = document.querySelector(".addToFavoriteBtn");
  const galleryWrapper = document.querySelector(".galleryWrapepr");

  temp.textContent = "Hello!";
  cityName.textContent = "Nice weather isn't it?";
  weatherIcon.src = defaultImg;

  detailsWindow.innerHTML = "";
  createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "defaultDetails",
    text: "Submit the location so I could show you weather details!",
  });
  heartButton.classList.remove("activeHeart");

  galleryWrapper.innerHTML = "";
  createElement({
    element: "div",
    insertionMethod: "append",
    domLocation: galleryWrapper,
    whatClass: "defaultPictures",
    text: "Submit the location so I could show you pictures from there!",
  });
}

export function checkStorage() {
  if (getCities() !== null) {
    let storedcities = getCities();
    return storedcities;
  } else {
    let cities = [];
    return cities;
  }
}
