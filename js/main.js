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
