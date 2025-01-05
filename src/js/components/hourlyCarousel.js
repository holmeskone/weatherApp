export function hourlyCarousel(description, hours) {
  // Create elements to display API reponse information
  const hourlyCarouselSection = document.createElement("div");
  const todayDescription = document.createElement("div");
  const descriptionContent = document.createElement("p");
  const hourlySection = document.createElement("div");
  // Add IDs to all created elements
  hourlyCarouselSection.id = "hour-carousel";
  todayDescription.id = "today-description-carousel";
  hourlySection.id = "hourly-section";
  //Add API description as innerText of descrption area
  descriptionContent.innerText = description;
  todayDescription.append(descriptionContent);

  //Iterate over the hours object and return each hour, icon and temperature for the day.
  hourlySection.id = "hourly-section";
  hours.forEach((hour) => {
    console.log(hour.datetime, hour.icon, hour.temp);
    const hourOfDay = document.createElement("p");
    const iconOfHour = document.createElement("i");
    const temperatureOfHour = document.createElement("p");
    hourOfDay.innerHTML = hour.datetime;
    iconOfHour.className = iconIdentifier(hour.icon);
    function iconIdentifier(icon) {
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

      return iconMappings[icon] || "none"; // Fallback to "none" if icon is not recognized
    }
    temperatureOfHour.innerHTML = hour.temp;
    hourlySection.append(hourOfDay, iconOfHour, temperatureOfHour);
  });

  //Dependant on the icon in API, call one FontAwesome icon or another

  hourlyCarouselSection.append(todayDescription, hourlySection);
  document.body.append(hourlyCarouselSection);
}
