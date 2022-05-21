var navAnchor = document.getElementById("navtop");
var img = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset != 0) {
    navAnchor.style.backgroundColor = "black";
    navAnchor.style.borderBottom = "none";
    img.style.transition = "all 1s";
    img.style.filter = " blur(5px)";
  } else {
    navAnchor.style = "";
    img.style.filter = "";
  }
});
