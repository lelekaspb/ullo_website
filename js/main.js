window.addEventListener("load", start);

let menu = document.querySelector("#menu_text_id");
let drop1 = document.querySelector("#menu_drop1");
let drop2 = document.querySelector("#menu_drop2");

function start() {
  document.querySelector("#hamburger").addEventListener("click", topMenu);
  document.querySelector("#menu_search").addEventListener("click", searchMenu);
  document.querySelector("#search_cross").addEventListener("click", searchMenu);
  drop1.addEventListener("click", dropdownMenu);
  drop2.addEventListener("click", dropdownMenu);
}

function topMenu() {
  this.classList.toggle("cross");
  document.querySelector("header").classList.toggle("menu_scroll");
  if (menu.className === "menu_text") {
    menu.className += " responsive";
    document.body.style.overflow = "hidden";
  } else {
    menu.className = "menu_text";
    document.body.style.overflow = "visible";
    drop1.className = "hidden";
    drop2.className = "hidden";
    drop1.nextElementSibling.className = "hidden";
    drop2.nextElementSibling.className = "hidden";
  }
}

function dropdownMenu() {
  this.classList.toggle("menu_chevron");
  this.nextElementSibling.classList.toggle("hidden");
}

function searchMenu() {
  document.querySelector(".search_box").classList.toggle("hidden");
  document.querySelector(".menu_head").classList.toggle("hidden");
}
