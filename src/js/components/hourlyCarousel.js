import { iconIdentifier } from "./weatheIcons";
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
  let hourIndex = 0;
  hours.forEach((hour) => {
    // If the hour is greater or equal to current hour display hours.
    const hourOfDaySection = document.createElement("div");
    const hourOfDayElement = document.createElement("p");
    const iconOfHourElement = document.createElement("i");
    const temperatureOfHourElement = document.createElement("p");
    hourOfDaySection.id = `hour-${hourIndex}-section`;
    const hourOfDay = hour.datetime.slice(0, 2);
    hourOfDayElement.innerHTML = hourOfDay;
    iconOfHourElement.className = iconIdentifier(hour.icon);
    temperatureOfHourElement.innerHTML = `${Math.round(hour.temp)}º`;
    hourOfDaySection.append(
      hourOfDayElement,
      iconOfHourElement,
      temperatureOfHourElement
    );
    hourlySection.appendChild(hourOfDaySection);
    hourIndex++;
  });

  //Dependant on the icon in API, call one FontAwesome icon or another

  hourlyCarouselSection.append(todayDescription, hourlySection);
  const weatherSection = document.getElementById("weather-section");
  weatherSection.append(hourlyCarouselSection);
}
