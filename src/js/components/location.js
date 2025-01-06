export function displayLocation(city) {
  const cityElement = document.createElement("div");
  cityElement.id = "location";
  const cityValue = document.createElement("h2");
  const countryValue = document.createElement("h3");
  // Split the string by commas and trim any extra spaces
  const parts = city.split(",").map((part) => part.trim());
  cityValue.innerHTML = parts[0];
  countryValue.innerHTML = parts[parts.length - 1];
  cityElement.append(cityValue, countryValue);
  document.body.appendChild(cityElement);
}
