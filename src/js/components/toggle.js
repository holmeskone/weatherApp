const checkbox = document.getElementById("status");

// Experiment Section
export function sliderMetrics(unit) {
  if (unit === "us") {
    localStorage.setItem("unit", "metric");
    console.log(`It was fahrenheit, now it's celcius`);
    // checkbox.checked = false;
  } else {
    localStorage.setItem("unit", "us");
    console.log(`It was celcius, now it's fahrenheit`);
    // checkbox.checked = true;
  }
}

export function sliderDefaultMetrics() {
  if (localStorage.getItem("unit") === null) {
    localStorage.setItem("unit", "metric");
    console.log(
      `Has automatically been alocated a unit ${localStorage.getItem("unit")}`
    );
    // checkbox.checked = false;
  } else {
    if (localStorage.getItem("unit") === "metric") {
      checkbox.checked = false;
    } else {
      checkbox.checked = true;
    }
  }
}
