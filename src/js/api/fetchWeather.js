export async function getWeather(city) {
  console.log(city);
  //   const city = document.getElementById("city");
  //   let cityValue = city.value;
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=WVR3K9GYJ4ZQJJRHS6AFF8E2K`,
    { mode: "cors" }
  );
  const weatherData = await response.json();
  const weatherCity = weatherData.resolvedAddress;
  const weatherDescription = weatherData.description;
  console.log(weatherCity, weatherDescription);
}
