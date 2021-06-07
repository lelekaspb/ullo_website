const form = document.querySelector("form");
form.addEventListener("submit", userSubmitted);

function userSubmitted(evt) {
  evt.preventDefault();
  console.log(form.elements.firstname.value);
  console.log(form.elements.lastname.value);
  console.log(form.elements.address.value);
  console.log(form.elements.city.value);
  console.log(form.elements.zip.value);
  console.log(form.elements.country.value);
  console.log(form.elements.phonenumber.value);

  const payload = {
    firstname: form.elements.firstname.value,
    lastname: form.elements.lastname.value,
    address: form.elements.address.value,
    city: form.elements.city.value,
    zip: form.elements.zip.value,
    country: form.elements.country.value,
    phonenumber: form.elements.phonenumber.value,
  };
  console.log(JSON.stringify(payload));
  document.querySelector("input[type=submit]").disable = true;

  var myHeaders = new Headers();
  myHeaders.append("x-apikey", "609090f9f2fc22523a42c7c0");
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(payload),
    redirect: "follow",
  };
  fetch("https://kea2s-c1e7.restdb.io/rest/checkout", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      document.querySelector("input[type=submit]").disable = false;
      form.elements.firstname.value = "";
      form.elements.lastname.value = "";
      form.elements.address.value = "";
      form.elements.zip.value = "";
      form.elements.city.value = "";
      form.elements.country.value = "";
      form.elements.phonenumber.value = "";
      document.querySelector("p.hidden").classList.remove("hidden");
    })
    .catch((error) => console.log("error", error));
}

function readMoreFunction() {
  var contentText = document.getElementById("content");
  var btnText = document.getElementById("buttonReadMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    contentText.style.display = "none";
  } else {
    dots.style.display = "none";
    contentText.style.display = "inline";
  }
}
