import { el } from "date-fns/locale";
import { favoriteCities } from ".";
import { checkFavoriteStatus } from "./checkFavoriteStatus";
import { createElement } from "./createElem";
import { defaultLoad } from "./defaultLoad";
import { getCityImages } from "./getImagesDataAPI";
import { currentCity, getWeatherData } from "./getWeatherDataAPI";
import { storeCities } from "./loaclStorage";

const heartButton = document.querySelector(".addToFavoriteBtn");
const favoriteLocationsList = document.querySelector(".favoriteLocationsList");
const cityName = document.querySelector(".currentCity");

export function favoriteListHandler() {
  heartButton.addEventListener("click", () => {
    if (
      checkFavoriteStatus(currentCity.city) === false &&
      cityName.textContent === currentCity.city
    ) {
      favoriteCities.push(currentCity.city);
      heartButton.classList.add("activeHeart");
      storeCities(favoriteCities);
      renderFavoriteCities();
    } else if (checkFavoriteStatus(currentCity.city) === true) {
      console.log(`${currentCity.city} is already added!  `);
    } else {
      console.log("Search for city first!");
    }
  });
}

function removeFavoriteCity(target) {
  if (target.parentNode.firstChild.textContent === cityName.textContent) {
    defaultLoad();
  }
  let index = favoriteCities.findIndex(
    (item) => item === target.parentNode.firstChild.textContent
  );
  favoriteCities.splice(index, 1);
  storeCities(favoriteCities);
  target.parentNode.remove();
}

export function renderFavoriteCities() {
  favoriteLocationsList.innerHTML = "";
  favoriteCities.forEach((city) => {
    const favortiteLocWrapper = createElement({
      element: "div",
      insertionMethod: "append",
      domLocation: favoriteLocationsList,
      whatClass: "favoriteLocationWrapper",
    });
    const favoriteLocText = createElement({
      element: "span",
      insertionMethod: "append",
      domLocation: favortiteLocWrapper,
      whatClass: "favoriteLocation",
      text: city,
    });
    favoriteLocText.addEventListener("click", (e) => {
      getWeatherData(e.target.textContent);
      getCityImages(e.target.textContent);
    });
    const favoriteLocDelete = createElement({
      element: "button",
      insertionMethod: "append",
      domLocation: favortiteLocWrapper,
      whatClass: "favoriteLocationBtn",
      text: "✕",
    });
    favoriteLocDelete.addEventListener("click", (e) => {
      removeFavoriteCity(e.target);
    });
  });
}
