export function storeCities(cities) {
  let stringifiedCities = JSON.stringify(cities);
  localStorage.setItem("cities", stringifiedCities);
}

export function getCities() {
  let retrievedCities = localStorage.getItem("cities");
  return JSON.parse(retrievedCities);
}
