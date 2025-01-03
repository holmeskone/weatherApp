let toggleButton = document.querySelector("[data-metric-toggle]");
export function toogleDefaultMetrics() {
  if (localStorage.getItem("unit") === null) {
    localStorage.setItem("unit", "metric");
    console.log(
      `Has automatically been alocated a unit ${localStorage.getItem("unit")}`
    );
    toggleButton.innerHTML = "Change to fahrenheit";
  } else {
    if (localStorage.getItem("unit") === "metric") {
      toggleButton.innerHTML = "Change to fahrenheit";
    } else {
      toggleButton.innerHTML = "Change to celcius";
    }
  }
}

export function toogleMetrics(unit) {
  if (unit === "us") {
    toggleButton.innerHTML = "";
    localStorage.setItem("unit", "metric");
    console.log(`It was fahrenheit, now it's celcius`);
    toggleButton.textContent = "Change to fahrenheit";
  } else {
    localStorage.setItem("unit", "us");
    console.log(`It was celcius, now it's fahrenheit`);
    toggleButton.innerHTML = "Change to celcius";
  }
}
