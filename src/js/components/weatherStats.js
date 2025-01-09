export function weatherStats(feelslike, humidity, wind, uv, sunrise, sunset) {
  // Create elements to display API response information
  const weatherStatsSection = document.createElement("div"); // This section is for the overall stats section that will be 3 columns and 2 rows

  // FeelsLike Section
  const feelsLikeSection = document.createElement("div");
  const feelsLikeTitleSection = document.createElement("div");
  const feelsLikeTitle = document.createElement("h4");
  const feelsLikeValue = document.createElement("p");
  const feelsLikeIcon = document.createElement("i");

  // Humidity Section
  const humiditySection = document.createElement("div");
  const humidityTitleSection = document.createElement("div");
  const humidityTitle = document.createElement("h4");
  const humidityValue = document.createElement("p");
  const humidityIcon = document.createElement("i");

  // Wind Section
  const windSection = document.createElement("div");
  const windTitleSection = document.createElement("div");
  const windTitle = document.createElement("h4");
  const windValue = document.createElement("p");
  const windIcon = document.createElement("i");

  // UV Index Section
  const UvIndexSection = document.createElement("div");
  const UVTitleSection = document.createElement("div");
  const UvTitle = document.createElement("h4");
  const UvValue = document.createElement("p");
  const UVIcon = document.createElement("i");

  // Sunrise Section
  const sunriseSection = document.createElement("div");
  const sunriseTitleSection = document.createElement("div");
  const sunriseTitle = document.createElement("h4");
  const sunriseValue = document.createElement("p");
  const sunriseIcon = document.createElement("i");

  // Sunset Section
  const sunsetSection = document.createElement("div");
  const sunsetTitleSection = document.createElement("div");
  const sunsetTitle = document.createElement("h4");
  const sunsetValue = document.createElement("p");
  const sunsetIcon = document.createElement("i");

  // WeatherStats section information
  weatherStatsSection.id = "weather-stats-section";

  // FeelsLike Section arrangement
  feelsLikeSection.id = "feels-like-section";
  feelsLikeTitleSection.id = "feels-like-title-section";
  feelsLikeTitle.id = "feels-like-title";
  feelsLikeValue.id = "feels-like-value";
  feelsLikeValue.className = "temperature";
  feelsLikeIcon.id = "feels-like-icon";
  feelsLikeTitle.innerHTML = "Feels like";
  feelsLikeValue.innerHTML = Math.round(feelslike) + "º";
  feelsLikeIcon.className = "fa-solid fa-temperature-three-quarters";
  feelsLikeTitleSection.append(feelsLikeIcon, feelsLikeTitle);
  feelsLikeSection.append(feelsLikeTitleSection, feelsLikeValue);

  // Humidity Section arrangement
  humiditySection.id = "humidity-section";
  humidityTitleSection.id = "humidity-title-section";
  humidityTitle.id = "humidity-title";
  humidityValue.id = "humidity-value";
  humidityIcon.id = "humidity-icon";
  humidityTitle.innerHTML = "Humidity";
  humidityValue.innerHTML = Math.round(humidity) + "%";
  humidityIcon.className = "fa-solid fa-droplet";
  humidityTitleSection.append(humidityIcon, humidityTitle);
  humiditySection.append(humidityTitleSection, humidityValue);

  // Wind Section arrangement
  windSection.id = "wind-section";
  windTitleSection.id = "wind-title-section";
  windTitle.id = "wind-title";
  windValue.id = "wind-value";
  windIcon.id = "wind-icon";
  windTitle.innerHTML = "Wind";
  windValue.innerHTML = Math.round(wind) + "Km/h";
  windIcon.className = "fa-solid fa-wind";
  windTitleSection.append(windIcon, windTitle);
  windSection.append(windTitleSection, windValue);

  // UV Index Section arrangement
  UvIndexSection.id = "uv-section";
  UVTitleSection.id = "uv-title-section";
  UvTitle.id = "uv-title";
  UvValue.id = "uv-value";
  UVIcon.id = "uv-icon";
  UvTitle.innerHTML = "UV Index";
  UvValue.innerHTML = Math.round(uv);
  UVIcon.className = "fa-solid fa-sun";
  UVTitleSection.append(UVIcon, UvTitle);
  UvIndexSection.append(UVTitleSection, UvValue);

  // Sunrise Section arrangement
  sunriseSection.id = "sunrise-section";
  sunriseTitleSection.id = "sunrise-title-section";
  sunriseTitle.id = "sunrise-title";
  sunriseValue.id = "sunrise-value";
  sunriseIcon.id = "sunrise-icon";
  sunriseTitle.innerHTML = "Sunrise";
  sunriseValue.innerHTML = sunrise.slice(0, 5);
  sunriseIcon.className = "fa-solid fa-sun";
  sunriseTitleSection.append(sunriseIcon, sunriseTitle);
  sunriseSection.append(sunriseTitleSection, sunriseValue);

  // Sunset Section arrangement
  sunsetSection.id = "sunset-section";
  sunsetTitleSection.id = "sunset-title-section";
  sunsetTitle.id = "sunset-title";
  sunsetValue.id = "sunset-value";
  sunsetIcon.id = "sunset-icon";
  sunsetTitle.innerHTML = "Sunset";
  sunsetValue.innerHTML = sunset.slice(0, 5);
  sunsetIcon.className = "fa-solid fa-moon";
  sunsetTitleSection.append(sunsetIcon, sunsetTitle);
  sunsetSection.append(sunsetTitleSection, sunsetValue);

  // Append all sections to the weatherStatsSection
  weatherStatsSection.append(
    feelsLikeSection,
    humiditySection,
    windSection,
    UvIndexSection,
    sunriseSection,
    sunsetSection
  );

  // Append the weatherStatsSection to the document body
  const weatherSection = document.getElementById("weather-section");
  weatherSection.append(weatherStatsSection);
}
