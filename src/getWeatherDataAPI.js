import { el } from "date-fns/locale";
import { myAPIkey } from ".";
import { filterCurrentCity } from "./filterCityObject";
import { getCityImages } from "./getImagesDataAPI";
import { loading } from "./loadingAnimation";
import { renderWeather } from "./renderWeather";

export let currentCity;
export let cityForExport = [1];
export function getWeatherData(favCity) {
  loading();
  let location;
  if (searchForm.location.value === "") {
    location = favCity;
  } else {
    location = searchForm.location.value;
  }
  searchForm.location.value = "";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myAPIkey}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("You've probably misspelled the city! Try again!");
    })
    .then((cityData) => {
      currentCity = filterCurrentCity(cityData);
      renderWeather(currentCity);
      cityForExport.shift();
      cityForExport.push(currentCity);
      getCityImages(currentCity.city);
    })
    .catch((error) => {
      console.log(error);
    });
}
