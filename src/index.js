import "./style.css";
import { searchCity } from "./js/components/searchBar";
console.log("hello world");
const clickInput = document.getElementById("search");

clickInput.addEventListener("click", () => {
  searchCity();
});
