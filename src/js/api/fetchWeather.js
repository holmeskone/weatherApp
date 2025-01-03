import { errorHandling } from "./errorHandling";
export async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WVR3K9GYJ4ZQJJRHS6AFF8E2K`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherCity = weatherData.resolvedAddress;
    const weatherDescription = weatherData.description;
    const weatherDays = weatherData.days;
    console.log(weatherData, weatherCity, weatherDescription, weatherDays);
  } catch (err) {
    console.log(err);
    errorHandling(city);
  }
}
