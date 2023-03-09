import convert from "convert";
import { format } from "date-fns";

export const CurrentCity = function (
  city,
  temp,
  feelsLike,
  weather,
  sunrise,
  sunset,
  icon,
  favoriteStatus
) {
  this.city = city;
  this.temp = Math.round(convert(Number(temp), "kelvin").to("celsius"));
  this.feelsLike = Math.round(
    convert(Number(feelsLike), "kelvin").to("celsius")
  );
  this.weather = weather;
  this.sunrise = format(new Date(sunrise), "HH:mm");
  this.sunset = format(new Date(sunset), "HH:mm");
  this.icon = icon;
  this.favoriteStatus = favoriteStatus;
};
