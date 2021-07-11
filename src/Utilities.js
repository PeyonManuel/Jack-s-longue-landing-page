export const animationOnScroll = (element, animation) => {
  if (!element) {
    return;
  }
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  if (
    elementHeight / 1.5 >
    distanceToTop - window.innerHeight + elementHeight
  ) {
    element.classList.add(animation);
  }
};
