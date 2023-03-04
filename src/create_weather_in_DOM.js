import { createElement } from "./createElem";
import { getWeatherIcon } from "./getWeatherIconURL";

export function renderWeather(cityData) {
  const temp = document.querySelector(".temperature");
  const cityName = document.querySelector(".currentCity");
  const weatherIcon = document.querySelector(".weatherImg");
  const detailsWindow = document.querySelector("#detailsWindow");
  console.log(detailsWindow);

  temp.textContent = `${cityData.temp}°`;
  cityName.textContent = cityData.city;
  weatherIcon.src = getWeatherIcon(cityData.icon);

  const cityName_forDetails = createElement({
    element: "span",
    insertionMethod: "append",
    domLocation: detailsWindow,
    whatClass: "cityNameDetails",
    text: cityData.city,
  });
}
