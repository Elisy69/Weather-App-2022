import "./reset.css";
import "./style.css";
import { tabsHandler } from "./TabsHandler";
import { searchHandler } from "./searchHandler";
import {
  favoriteListHandler,
  renderFavoriteCities,
} from "./ favoriteListHandler";
import { defaultLoad, checkStorage } from "./defaultLoad";

export const myAPIkey = "0daebd284041661535effcb38b6df858";
export const favoriteCities = checkStorage();
defaultLoad();
tabsHandler();
searchHandler();
favoriteListHandler();
renderFavoriteCities();
