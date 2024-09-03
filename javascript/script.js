// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  const threshold = window.innerHeight * 0.75; // 75% of the viewport height
  return rect.top <= threshold && rect.bottom >= 0;
}

// Function to add 'in-view' class to elements that are in view
function checkElementsInView() {
  const elements = document.querySelectorAll(".content-block");
  elements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("in-view");
    }
  });
}

// Add event listener for scroll event
window.addEventListener("scroll", checkElementsInView);

// Run on page load to catch any elements that are already in view
document.addEventListener("DOMContentLoaded", checkElementsInView);
