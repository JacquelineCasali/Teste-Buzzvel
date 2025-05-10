export function scrollCarousel(
    container: HTMLDivElement,
    direction: "left" | "right"
  ) {
    const { offsetWidth, scrollLeft, scrollWidth } = container;
  
    if (direction === "left") {
      if (scrollLeft === 0) {
        container.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -offsetWidth, behavior: "smooth" });
      }
    }
  
    if (direction === "right") {
      const maxScrollLeft = scrollWidth - offsetWidth;
  
      if (Math.ceil(scrollLeft) >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: offsetWidth, behavior: "smooth" });
      }
    }
  }
  