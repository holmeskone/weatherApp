import "./style.css";
import { searchCity } from "./js/components/searchBar";
import { toogleDefaultMetrics, toogleMetrics } from "./js/components/toggle";
import { moveCarousel } from "./js/utils/carouselMovement";

document.addEventListener("DOMContentLoaded", () => {
  toogleDefaultMetrics();
  console.log(localStorage.getItem("unit"));
});

console.log(localStorage.getItem("unit"));
const metricToggle = document.querySelector("[data-metric-toggle]");
metricToggle.addEventListener("click", () => {
  toogleMetrics(localStorage.getItem("unit"));
  console.log(localStorage.getItem("unit"));
});

const clickInput = document.getElementById("search");
clickInput.addEventListener("click", () => {
  searchCity(localStorage.getItem("unit"));
  if (document.getElementById("location")) {
    // Step 1: Get the parent div
    const weatherSection = document.getElementById("weather-section");

    // Step 2: Clear and remove all child divs
    while (weatherSection.firstChild) {
      weatherSection.removeChild(weatherSection.firstChild);
    }
  }
});

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
