document.body.style.overflow = "hidden";

document.querySelector(".brighten").addEventListener("click", lightenIndexPage);

function lightenIndexPage() {
  document.querySelector(".brighten").classList.add("hidden");

  document.querySelector(".black").classList.add("opacity");
  document.querySelector(".bulb").classList.add("bulb_clicked");

  document
    .querySelector(".black")
    .addEventListener("animationend", hideIndexPage);

  document.body.style.overflow = "visible";
}

function hideIndexPage() {
  document.querySelector(".black").classList.add("hidden");
}

document.querySelector(".menu_logo").addEventListener("click", showIndexPage);

function showIndexPage() {
  document.querySelector(".black").classList.remove("hidden");
}
