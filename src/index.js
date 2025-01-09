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

// Add a loading state variable
let isLoading = false;

const clickInput = document.getElementById("search");
clickInput.addEventListener("click", async () => {
  // If already loading, don't do anything
  if (isLoading) {
    return;
  }

  try {
    // Set loading state
    isLoading = true;
    // Optionally disable the search button
    clickInput.disabled = true;

    const weatherSection = document.getElementById("weather-section");
    // Step 1: Clear and remove all child divs
    if (weatherSection.firstChild) {
      while (weatherSection.firstChild) {
        weatherSection.removeChild(weatherSection.firstChild);
      }
    }
    // Step 2: Wait for searchCity to complete
    await searchCity(localStorage.getItem("unit"));
  } finally {
    // Reset loading state and enable button regardless of success/failure
    isLoading = false;
    clickInput.disabled = false;
  }
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
