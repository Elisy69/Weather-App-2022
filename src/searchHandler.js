import { getWeatherData } from "./getWeatherDataAPI";

const inputText = document.querySelector(".searchInput");

const searchBtn = document.querySelector(".searchImg");

export function searchHandler() {
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    getWeatherData();
  });
}
