import "./style.css";
import { searchCity } from "./js/components/searchBar";
import { sliderDefaultMetrics, sliderMetrics } from "./js/components/toggle";
import { moveCarousel } from "./js/utils/carouselMovement";

document.addEventListener("DOMContentLoaded", () => {
  sliderDefaultMetrics();
  console.log(localStorage.getItem("unit"));
});

//Select the value of the unit of temperature
const unitSlider = document.getElementById("status");
unitSlider.addEventListener("click", () => {
  console.log("Clicked Toggle");
  sliderMetrics(localStorage.getItem("unit"));
});

//Searching city for temperature
const clickInput = document.getElementById("search");
clickInput.addEventListener("click", () => {
  const weatherSection = document.getElementById("weather-section");
  if (weatherSection.firstChild) {
    // Step 1: Clear and remove all child divs
    while (weatherSection.firstChild) {
      weatherSection.removeChild(weatherSection.firstChild);
    }
  }
  searchCity(localStorage.getItem("unit"));
});

//Clicking on the button for the daily temperature carousel
document.addEventListener("click", (e) => {
  const parentElement = e.target.parentElement;
  if (parentElement) {
    if (parentElement.id.includes("button")) {
      moveCarousel();
    }
  } else {
    return;
  }
});
