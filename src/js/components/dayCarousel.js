//Make function, render information on next 14-days of weather, include day, weather, icon,
import { formatDate } from "../utils/dateUtils";
import { convertToWeekDay } from "../utils/dateUtils";
import { iconIdentifier } from "./weatheIcons";
export function dayCarousel(fortnightlyWeather) {
  // This is the overall carousel section, within this section there will be two buttons and the divs containing the daily forecasts/
  const dayCarouselSection = document.createElement("div");
  dayCarouselSection.id = "fortnightly-carousel";
  //Backwards section, to go to the left on the carousel.
  const backwardSection = document.createElement("div");
  const backwardButton = document.createElement("button");
  backwardSection.append(backwardButton);
  //Main Section of carousel.
  const daySection = document.createElement("div"); // Block for whole 15 day section
  daySection.id = "fortnight-section";
  //Forward section, to go to the right on the carousel.
  const forwardSection = document.createElement("div");
  const forwardButton = document.createElement("button");
  forwardSection.append(forwardButton);

  let dayIndex = 0;
  // Iterate over all days provided by API.
  fortnightlyWeather.forEach((day) => {
    const dayBlock = document.createElement("div"); // Block for each day, within this block there will be the day, date, icon, min and max
    dayBlock.id = `day-${dayIndex}-section`;
    // Day and Date section
    const dayOfWeek = document.createElement("div"); // Create a div where the day and date information will be added
    const weekDay = document.createElement("p"); // Create a p to display day of Week {Monday, Tuesday...}.
    const numberOfDay = document.createElement("p"); // Create a p to display date.
    dayOfWeek.id = `day-${dayIndex}-date`; //
    dayIndex++;
    weekDay.innerHTML = convertToWeekDay(day.datetime); // Call function to return day of week {Monday, Tuesday...}.
    numberOfDay.innerHTML = formatDate(day.datetime); // Call function to return date in format, Jan 1

    dayOfWeek.append(weekDay, numberOfDay);

    // Icon section
    const iconSection = document.createElement("div"); // This section will contain the icon of the day
    iconSection.id = `day-${dayIndex}-icon-section`;
    const iconImage = document.createElement("i");
    iconImage.id = `day-${dayIndex}-icon`;
    iconImage.className = iconIdentifier(day.icon);
    iconSection.append(iconImage);

    // min max section
    const minmaxSection = document.createElement("div"); // This section will contain the minmax of the day
    const minSection = document.createElement("div"); // This section will contain the min of the day
    const maxSection = document.createElement("div"); // This section will contain the max of the day
    minmaxSection.id = `day-${dayIndex}-minmax-section`; // This will be the id for the minmax section
    minSection.id = `day-${dayIndex}-min-section`; // This will be the id for the min section
    maxSection.id = `day-${dayIndex}-max-section`; // This will be the id for the max section
    const minOfDay = document.createElement("p");
    const maxOfDay = document.createElement("p");
    minOfDay.innerHTML = `${Math.round(day.tempmin)}º`;
    maxOfDay.innerHTML = `${Math.round(day.tempmax)}º`;
    minSection.append(minOfDay);
    maxSection.append(maxOfDay);
    minmaxSection.append(minSection, maxSection);

    // Append everything
    dayBlock.append(dayOfWeek, iconSection, minmaxSection);
    daySection.append(dayBlock);
  });
  dayCarouselSection.append(backwardSection, daySection, forwardSection);
  const weatherSection = document.getElementById("weather-section");
  weatherSection.append(dayCarouselSection);
}
