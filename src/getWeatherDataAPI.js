import { myAPIkey } from ".";
import { filterCurrentCity } from "./filter_city_object";

export function getWeatherData(renderNowWeather) {
  let location = searchForm.location.value;
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
      renderNowWeather(filterCurrentCity(cityData));
    })
    .catch((error) => {
      console.log(error);
    });
}
