import { getWeather } from "../api/fetchWeather";

export function searchCity() {
  const inputCity = document.getElementById("city");
  getWeather(inputCity.value);
  console.log(inputCity.value);
}
