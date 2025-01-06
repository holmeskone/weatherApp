export function iconIdentifier(icon) {
  const iconMappings = {
    // Clear conditions
    "clear-day": "fa-solid fa-sun",
    "clear-night": "fa-solid fa-moon",

    // Cloudy conditions
    "partly-cloudy-day": "fa-solid fa-cloud-sun",
    "partly-cloudy-night": "fa-solid fa-cloud-moon",
    cloudy: "fa-solid fa-cloud",

    // Precipitation
    rain: "fa-solid fa-cloud-rain",
    snow: "fa-solid fa-snowflake",
    sleet: "fa-solid fa-cloud-sleet",
    hail: "fa-solid fa-cloud-hail",

    // Severe weather
    "thunder-rain": "fa-solid fa-cloud-bolt",
    "thunder-showers-day": "fa-solid fa-cloud-bolt-sun",
    "thunder-showers-night": "fa-solid fa-cloud-bolt-moon",

    // Mixed precipitation
    "showers-day": "fa-solid fa-cloud-sun-rain",
    "showers-night": "fa-solid fa-cloud-moon-rain",

    // Low visibility conditions
    fog: "fa-solid fa-fog",
    wind: "fa-solid fa-wind",

    // Fallback for unknown conditions
    default: "fa-solid fa-question",
    // Add more mappings as needed
  };
  //   console.log(typeof iconMappings[icon]);
  return iconMappings[icon] || "none"; // Fallback to "none" if icon is not recognized
}
