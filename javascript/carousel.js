function initializeCarousel(carouselId) {
  let items = document.querySelectorAll(`#${carouselId} .carousel-item`);
  items.forEach((e) => {
    const slide = 4;
    let next = e.nextElementSibling;
    for (let i = 0; i < slide; i++) {
      if (!next) {
        // wrap carousel by using first child
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
