import "./style.css";
import { searchCity } from "./js/components/searchBar";
import { toogleDefaultMetrics, toogleMetrics } from "./js/components/toggle";

document.addEventListener("DOMContentLoaded", () => {
  toogleDefaultMetrics();
  console.log(localStorage.getItem("unit"));
});
console.log(localStorage.getItem("unit"));
const metricToggle = document.querySelector("[data-metric-toggle]");
metricToggle.addEventListener("click", () => {
  toogleMetrics(localStorage.getItem("unit"));
  console.log(localStorage.getItem("unit"));
});

const clickInput = document.getElementById("search");
clickInput.addEventListener("click", () => {
  searchCity(localStorage.getItem("unit"));
});
