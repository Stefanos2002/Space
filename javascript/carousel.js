function initializeCarousel(carouselId) {
    let viewportWidth = window.innerWidth;

    let items = document.querySelectorAll(`#${carouselId} .carousel-item`);

  let slide = 4;
  items.forEach((e) => {
    let next = e.nextElementSibling;
    for (let i = 0; i < slide - 1; i++) {
      // Clone the required number of slides
      if (!next) {
        // Wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      e.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
}

// Initialize each carousel by passing its ID
initializeCarousel("carouselOne");
initializeCarousel("carouselTwo");
