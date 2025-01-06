export function weatherCard(
  city,
  currentTemperature,
  conditions,
  maxTemperature,
  minTemperature
) {
  const weatherCardDiv = document.createElement("div");
  weatherCardDiv.id = "weather-card";
  const weatherCardTemperature = document.createElement("div");
  weatherCardTemperature.id = "weather-temperature";
  const weatherMaxMin = document.createElement("div");
  weatherMaxMin.id = "weather-maxmin";
  const weatherCardDescription = document.createElement("div");
  weatherCardDescription.id = "weather-description";
  const temperature = document.createElement("h3");
  const currentDescription = document.createElement("h3");
  const maxTemp = document.createElement("h3");
  const minTemp = document.createElement("h3");
  temperature.innerHTML = `${Math.round(currentTemperature)}º`;
  currentDescription.innerHTML = conditions;
  maxTemp.innerHTML = `H:${Math.round(maxTemperature)}º`;
  minTemp.innerHTML = `L:${Math.round(minTemperature)}º`;

  weatherCardTemperature.appendChild(temperature);
  weatherCardDescription.appendChild(currentDescription);
  weatherMaxMin.append(maxTemp, minTemp);
  weatherCardDiv.append(
    weatherCardTemperature,
    weatherCardDescription,
    weatherMaxMin
  );
  document.body.appendChild(weatherCardDiv);

  console.log(
    city,
    currentTemperature,
    conditions,
    maxTemperature,
    minTemperature
  );
}
