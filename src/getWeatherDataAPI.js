import { myAPIkey } from ".";
import { sortCurrentCity } from "./sort_city_object";

export function getWeatherData() {
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
      sortCurrentCity(cityData);
    })
    .catch((error) => {
      "You've probably misspelled the city! Try again!";
      console.log(error);
    });
}
