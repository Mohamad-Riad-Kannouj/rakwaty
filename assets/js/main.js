function navbar(e) {
  let position = document.getElementById(e).offsetTop;
  let mediaQuery = window.matchMedia("(max-width: 992px)");

  if (mediaQuery.matches) {
    if (e == "hot_drinks") {
      scrollTo(0, position - 150);
    } else {
      scrollTo(0, position - 180);
    }
  } else {
    if (e == "hot_drinks") {
      scrollTo(0, position - 104);
    } else {
      scrollTo(0, position - 128);
    }
  }
}
