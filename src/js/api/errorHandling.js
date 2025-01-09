export function errorHandling(city) {
  console.log(`Sorry, ${city} was not found in out database`);
  // Create the outer div for the loading spinner
  const weatherSection = document.getElementById("weather-section");
  // Create the spinner element
  const error = document.createElement("div");
  error.className = "error";

  // Create the loading text
  const errorText = document.createElement("p");
  errorText.textContent = "The city was not found, please try again. ";

  // Append the spinner and text to the loadingSpinner div
  error.appendChild(errorText);

  // Append the loadingSpinner to the body (or any other container)
  weatherSection.append(error);
}
