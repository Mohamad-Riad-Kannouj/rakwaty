function navbar(e) {
  let position = document.getElementById(e).offsetTop;
  let mediaQuery = window.matchMedia("(max-width: 992px)");
  if (mediaQuery.matches) {
    scrollTo(0, position - 120);
  } else {
    scrollTo(0, position - 100);
  }
}