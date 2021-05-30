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


// footer
const formSubscribe = document.querySelector(".form_subscribe");
const modalSubscribe = document.querySelector(".modal_subscribe");

formSubscribe.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formSubscribe.elements.email.value);

  const payload = {
    email_address: formSubscribe.elements.email.value,
  };

  fetch("https://kea0209-5a57.restdb.io/rest/ullo-subscriptions", {
    method: "POST",
    headers: {
      "x-apikey": "6082d28c28bf9b609975a5db",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
      console.log(JSON.stringify(payload));
      showModal();
      clearForm();
    })
    .catch((err) => {
      console.error(err);
    });
});

function clearForm() {
  document.querySelector("button[type=submit]").disabled = false;
  formSubscribe.elements.email.value = "";
}

function showModal() {
  modalSubscribe.style.display = "block";
  document.querySelector("span.close").addEventListener("click", (e) => {
    e.stopPropagation();
    modalSubscribe.style.display = "none";
  });
  window.addEventListener("click", () => {
    modalSubscribe.style.display = "none";
  });
}
// footer end