export function weatherStats(feelslike, humidity, wind, uv, sunrise, sunset) {
  // Create elements to display API reponse information
  const weatherStatsSection = document.createElement("div"); //This section is for the overall stats section that will be 3 columns and 2 rows
  const feelsLikeSection = document.createElement("div");
  const feelsLikeTitle = document.createElement("h4");
  const feelsLikeValue = document.createElement("p");
  const humiditySection = document.createElement("div");
  const humidityTitle = document.createElement("h4");
  const humidityValue = document.createElement("p");
  const windSection = document.createElement("div");
  const windTitle = document.createElement("h4");
  const windValue = document.createElement("p");
  const UvIndexSection = document.createElement("div");
  const UvTitle = document.createElement("h4");
  const UvValue = document.createElement("p");
  const sunriseSection = document.createElement("div");
  const sunriseTitle = document.createElement("h4");
  const sunriseValue = document.createElement("p");
  const sunsetSection = document.createElement("div");
  const sunsetTitle = document.createElement("h4");
  const sunsetValue = document.createElement("p");

  // WeatherStats section information
  weatherStatsSection.id = "weather-stats-section";

  //FeelsLike Section arrangement
  feelsLikeSection.id = "feels-like-section";
  feelsLikeTitle.id = "feels-like-title";
  feelsLikeValue.id = "feels-like-value";
  feelsLikeTitle.innerHTML = "Wind";
  feelsLikeValue.innerHTML = Math.round(feelslike) + "º";
  feelsLikeSection.append(feelsLikeTitle, feelsLikeValue);

  //Humidity Section arrangement
  humiditySection.id = "humidity-section";
  humidityTitle.id = "humidity-title";
  humidityValue.id = "humidity-value";
  humidityTitle.innerHTML = "Humidity";
  humidityValue.innerHTML = Math.round(humidity) + "%";
  humiditySection.append(humidityTitle, humidityValue);

  //Wind Section arrangement
  windSection.id = "wind-section";
  windTitle.id = "wind-title";
  windValue.id = "wind-value";
  windTitle.innerHTML = "Wind";
  windValue.innerHTML = Math.round(wind) + "Km/h";
  windSection.append(windTitle, windValue);

  //UV Section arrangement
  UvIndexSection.id = "uv-section";
  UvTitle.id = "uv-title";
  UvValue.id = "uv-value";
  UvTitle.innerHTML = "UV Index";
  UvValue.innerHTML = Math.round(uv);
  UvIndexSection.append(UvTitle, UvValue);

  //Sunrise Section arrangement
  sunriseSection.id = "sunrise-section";
  sunriseTitle.id = "sunrise-title";
  sunriseValue.id = "sunrise-value";
  sunriseTitle.innerHTML = "Sunrise";
  sunriseValue.innerHTML = sunrise.slice(0, 5);
  sunriseSection.append(sunriseTitle, sunriseValue);
  //Sunset Section arrangement
  sunsetSection.id = "sunrise-section";
  sunsetTitle.id = "sunrise-title";
  sunsetValue.id = "sunrise-value";
  sunsetTitle.innerHTML = "Sunrise";
  sunsetValue.innerHTML = sunset.slice(0, 5);
  sunsetSection.append(sunsetTitle, sunsetValue);

  weatherStatsSection.append(
    feelsLikeSection,
    humiditySection,
    windSection,
    UvIndexSection,
    sunriseSection,
    sunsetSection
  );
  document.body.append(weatherStatsSection);
}
