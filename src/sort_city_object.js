import { CurrentCity } from "./sortedCityFactory";

export function sortCurrentCity(cityData) {
  console.log(cityData);
  let sortedCityData = new CurrentCity(
    cityData.name,
    cityData.main.temp,
    cityData.main.feels_like,
    cityData.weather[0].main,
    cityData.sys.sunrise,
    cityData.sys.sunset
  );
  console.log(sortedCityData);
}
