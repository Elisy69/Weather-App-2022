import { favoriteCities } from ".";

export function checkFavoriteStatus(cityName) {
  return favoriteCities.includes(cityName);
}
