import { checkFavoriteStatus } from "./checkFavoriteStatus";
import { createElement } from "./createElem";
import { getWeatherIcon } from "./getWeatherIconURL";
import { stopLoading } from "./loadingAnimation";

export function renderWeather(cityData) {
  const temp = document.querySelector(".temperature");
  const cityName = document.querySelector(".currentCity");
  const weatherIcon = document.querySelector(".weatherImg");
  const detailsWindow = document.querySelector("#detailsWindow");
  const heartButton = document.querySelector(".addToFavoriteBtn");
  const nowWindow = document.querySelector("#nowWindow");

  if (checkFavoriteStatus(cityData.city) === true) {
    heartButton.classList.add("activeHeart");
  } else {
    heartButton.classList.remove("activeHeart");
  }
  stopLoading();
  temp.textContent = `${cityData.temp}°`;
  cityName.textContent = cityData.city;
  weatherIcon.src = getWeatherIcon(cityData.icon);

  detailsWindow.innerHTML = "";
  const cityName_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "cityNameDetails",
    text: cityData.city,
  });
  const temp_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "tempDetails",
    text: `Temperature: ${cityData.temp}°`,
  });
  const feelsLike_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "feelsLikeDetails",
    text: `Feels like: ${cityData.feelsLike}°`,
  });
  const weather_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "weatherDetails",
    text: `Weather: ${cityData.weather}`,
  });
  const sunrise_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "sunriseDetails",
    text: `Sunrise: ${cityData.sunrise}`,
  });
  const sunset_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "sunsetDetails",
    text: `Sunset: ${cityData.sunset}`,
  });
}
