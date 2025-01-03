export function displayLocation(city) {
  const cityElement = document.createElement("div");
  cityElement.id = "location";
  const cityValue = document.createElement("h2");
  cityValue.innerHTML = city;
  cityElement.appendChild(cityValue);
  document.body.appendChild(cityElement);
}
