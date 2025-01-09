export function moveCarousel() {
  const prev = document.getElementById("back-button");
  const next = document.getElementById("forward-button");
  const list = document.getElementById("fortnight-section");
  const day = document.querySelector(".day");

  let itemWidth; // Width of each item (will be set dynamically)

  // Function to calculate the scroll distance based on screen width
  function getScrollDistance() {
    const screenWidth = window.innerWidth;

    // Adjust the number of items to scroll based on screen width
    if (screenWidth <= 391) {
      // Mobile devices
      itemWidth = day.offsetWidth; // Width of each item (103px)
      return itemWidth * 1; // Scroll 4 items at a time
    } else if (screenWidth > 391 && screenWidth <= 601) {
      // Mobile devices
      itemWidth = day.offsetWidth; // Width of each item (103px)
      console.log(itemWidth);
      return itemWidth * 2; // Scroll 4 items at a time
    } else if (screenWidth > 601 && screenWidth < 1025) {
      // Mobile devices
      itemWidth = day.offsetWidth; // Width of each item (103px)
      console.log(itemWidth);
      return itemWidth * 4; // Scroll 4 items at a time
    } else {
      // Desktop devices
      itemWidth = day.offsetWidth; // Width of each item (103px)
      return itemWidth * 7; // Scroll 7 items at a time
    }
  }

  prev.addEventListener("click", () => {
    list.scrollLeft -= getScrollDistance(); // Scroll left
  });

  next.addEventListener("click", () => {
    list.scrollLeft += getScrollDistance(); // Scroll right
  });
}
