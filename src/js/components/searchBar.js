import { getWeather } from "../api/fetchWeather";

export async function searchCity(unit) {
  // Create the outer div for the loading spinner
  const weatherSection = document.getElementById("weather-section");
  const loadingSpinner = document.createElement("div");
  loadingSpinner.id = "loading-spinner";
  loadingSpinner.style.display = "none"; // Initially hidden

  // Create the spinner element
  const spinner = document.createElement("div");
  spinner.className = "spinner";

  // Create the loading text
  const loadingText = document.createElement("p");
  loadingText.textContent = "Loading...";

  // Append the spinner and text to the loadingSpinner div
  loadingSpinner.appendChild(spinner);
  loadingSpinner.appendChild(loadingText);

  // Append the loadingSpinner to the body (or any other container)
  weatherSection.appendChild(loadingSpinner);

  const inputCity = document.getElementById("city");
  await getWeather(inputCity.value, unit);
  console.log(inputCity.value, unit);
}
