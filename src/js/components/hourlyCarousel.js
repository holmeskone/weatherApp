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
  hours.forEach((hour) => {
    console.log(hour.datetime, hour.icon, hour.temp);
    const hourOfDay = document.createElement("p");
    const iconOfHour = document.createElement("i");
    const temperatureOfHour = document.createElement("p");
    hourOfDay.innerHTML = hour.datetime;
    iconOfHour.className = iconIdentifier(hour.icon);
    temperatureOfHour.innerHTML = Math.round(hour.temp);
    hourlySection.append(hourOfDay, iconOfHour, temperatureOfHour);
  });

  //Dependant on the icon in API, call one FontAwesome icon or another

  hourlyCarouselSection.append(todayDescription, hourlySection);
  document.body.append(hourlyCarouselSection);
}
