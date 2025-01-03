export function hourlyCarousel(description, hours) {
  const hourlyCarouselSection = document.createElement("div");
  hourlyCarouselSection.id = "hour-carousel";
  const todayDescription = document.createElement("div");
  todayDescription.id = "today-description-carousel";
  const descriptionContent = document.createElement("p");
  descriptionContent.innerText = description;
  todayDescription.append(descriptionContent);

  const hourlySection = document.createElement("div");
  hourlySection.id = "hourly-section";
  hours.forEach((hour) => {
    console.log(hour.datetime);
    const hourOfDay = document.createElement("p");
    hourOfDay.innerHTML = hour.datetime;
    hourlySection.append(hourOfDay);
  });
  hourlyCarouselSection.append(todayDescription, hourlySection);
  document.body.append(hourlyCarouselSection);
}
