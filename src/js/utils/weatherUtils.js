export function changeUnits() {
  const allTemperatures = document.querySelectorAll(".temperature");

  console.log(allTemperatures);
  const newUnit = localStorage.getItem("unit");
  console.log(newUnit);

  allTemperatures.forEach((temperature) => {
    console.log(temperature);
    let temperatureValue = temperature.innerHTML.slice(0, -1);
    console.log(temperatureValue);
    let numeralTemperatureValue = parseInt(temperatureValue);
    console.log(typeof numeralTemperatureValue);
    if (newUnit === "metric") {
      //The new unit it changes to, in this case it moved from F to C.
      let celciusTemperature = numeralTemperatureValue - 33;
      temperature.innerHTML = `${celciusTemperature}º`;
    } else {
      //The new unit it changes to, in this case it moved from C to F.
      let fahrenheitTemperature = numeralTemperatureValue + 33;
      temperature.innerHTML = `${fahrenheitTemperature}º`;
    }
  });
}
