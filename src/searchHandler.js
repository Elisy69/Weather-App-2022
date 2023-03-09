import { renderWeather } from "./renderWeather";
import { getWeatherData } from "./getWeatherDataAPI";

const inputText = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchImg");
const form = document.querySelector(".searchForm");

export function searchHandler() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    getWeatherData(renderWeather);
  });
}
