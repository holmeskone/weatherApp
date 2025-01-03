import { getWeather } from "../api/fetchWeather";

export function searchCity(unit) {
  const inputCity = document.getElementById("city");
  getWeather(inputCity.value, unit);
  console.log(inputCity.value, unit);
}
