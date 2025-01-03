import { errorHandling } from "./errorHandling";
import { displayLocation } from "../components/location";
import { weatherCard } from "../components/weatherCard";
import { hourlyCarousel } from "../components/hourlyCarousel";
export async function getWeather(city, unit) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&key=WVR3K9GYJ4ZQJJRHS6AFF8E2K`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    const weatherCity = weatherData.resolvedAddress;
    const weatherTemperature = weatherData.days[0].temp;
    const weatherConditions = weatherData.days[0].conditions;
    const weatherMaxTemp = weatherData.days[0].tempmax;
    const weatherMinTemp = weatherData.days[0].tempmin;
    const weatherDescription = weatherData.days[0].description;
    const weatherHours = weatherData.days[0].hours;
    console.log(weatherData);
    displayLocation(weatherCity);
    weatherCard(
      weatherCity,
      weatherTemperature,
      weatherConditions,
      weatherMaxTemp,
      weatherMinTemp
    );
    hourlyCarousel(weatherDescription, weatherHours);
  } catch (err) {
    console.log(err);
    errorHandling(city);
  }
}
