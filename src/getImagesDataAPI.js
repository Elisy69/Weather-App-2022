import { cityForExport } from "./getWeatherDataAPI";
import { renderGallery } from "./renderGallery";

export async function getCityImages(favCity) {
  let location;
  let weather;
  if (searchForm.location.value === "") {
    location = favCity;
  } else {
    location = searchForm.location.value;
  }
  weather = cityForExport[0].weather;
  console.log(weather);
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${location} with ${weather} weather&client_id=IHgYU5fOxC2l6qiv3RvecOc5dJo_RRAw81kwKtwBG8U`
  );
  const data = await response.json();
  const results = await data.results;
  const imagesList = [];
  for (const image of results) {
    imagesList.push(await image.urls.small);
  }
  renderGallery(imagesList);
}
