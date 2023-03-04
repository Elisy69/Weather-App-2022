export function getWeatherIcon(icon) {
  console.log(icon);
  return `http://openweathermap.org/img/wn/${String(icon)}@2x.png`;
}
