export function toogleDefaultMetrics() {
  if (localStorage.getItem("unit") === null) {
    localStorage.setItem("unit", "metric");
    console.log(
      `Has automatically been alocated a metric ${localStorage.getItem("unit")}`
    );
  }
}

export function toogleMetrics(unit) {
  if (unit === "us") {
    localStorage.setItem("unit", "metric");
    console.log(`It was fahrenheit, now it's celcius`);
  } else {
    localStorage.setItem("unit", "us");
    console.log(`It was celcius, now it's fahrenheit`);
  }
}
