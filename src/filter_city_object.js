import { CurrentCity } from "./sortedCityFactory";

export function filterCurrentCity(cityData) {
  console.log(cityData);
  let filteredCityData = new CurrentCity(
    cityData.name,
    cityData.main.temp,
    cityData.main.feels_like,
    cityData.weather[0].main,
    cityData.sys.sunrise,
    cityData.sys.sunset,
    cityData.weather[0].icon
  );
  console.log(filteredCityData);
  return filteredCityData;
}
