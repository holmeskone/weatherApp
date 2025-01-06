export function formatDate(dateString) {
  // Create a Date object from the input string
  const date = new Date(dateString);

  // Extract the month and day
  const month = date.toLocaleString("default", { month: "short" }); // "Jan"
  const day = date.getDate(); // 6

  // Combine into the desired format
  return `${month} ${day}`; // "Jan 6"
}

// Map the days of the week:
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function convertToWeekDay(day) {
  const date = new Date(day); // set API response as a Date.
  const dayOfWeekNumber = date.getDay(); // Get the day of the week as a number (0-6)
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber]; // Find the name of the position that was provided by date.getDay()
  return dayOfWeekName;
}
