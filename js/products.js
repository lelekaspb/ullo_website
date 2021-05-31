window.addEventListener("load", start);
let url = "https://kea0209-5a57.restdb.io/rest/ullo-products?fetchchildren=true";
const options = {
  headers: {
    "x-apikey": "6082d28c28bf9b609975a5db",
  },
};

function start() {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => data.forEach(showBulb))
      .catch((e) => {
        console.error("An error occured:", e.message);
      });
  }

  const productTemplate = document.querySelector(".product_template").content;
  const productParent = document.querySelector(".products_list");

  function showBulb(bulb) {
    console.log(bulb);
    const productClone = productTemplate.cloneNode(true);
    productClone.querySelector(".product_title").textContent = bulb.title;
    if (bulb.price_current == bulb.price_regular) {
        console.log("not sale");
        productClone.querySelector(".sale").classList.add("hidden");
        productClone.querySelector(".price_number").textContent = bulb.price_current;
    } else {
        console.log("sale");
        productClone.querySelector(".sale_price").textContent = bulb.price_regular;
        productClone.querySelector(".price_number").textContent = bulb.price_current;
    }
    productClone.querySelector("img").src = bulb.images[0].link;
    productClone.querySelector("img").alt = bulb.title;
    productParent.appendChild(productClone);
  }

  document.querySelector("#sort").addEventListener("change", (e) => {
      console.log(document.querySelector("#sort").value);
      const sortBy = document.querySelector("#sort").value;
      if (sortBy !== "none") {
        url = `https://kea0209-5a57.restdb.io/rest/ullo-products?fetchchildren=true&sort=${sortBy}&dir=1`;
      } else {
          url = `https://kea0209-5a57.restdb.io/rest/ullo-products?fetchchildren=true`;
      }      
      productParent.innerHTML = "";
      start();
  });

//   living room in different colors
// document.querySelectorAll(".color").forEach((item) => {addEventListener("click", (e) => {
//     console.log(e.target.classList[1]);
// })});

const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
    addEventListener("click", changeColor);
    console.log(color);
});

function changeColor(e) {
    // e.target.removeEventListener("click", changeColor);
    console.log(e.target.classList[1]);
    e.target.classList.add("highlighted");
    colors.forEach((color) => {
        if (color !== e.target) {
            color.classList.remove("highlighted");
        }
    });
    let chosenColor = e.target.classList[1];
    console.log(chosenColor);
    const classes = document.querySelector(".moods").classList;
    console.log(classes);
    if (classes.length == 1) {
        classes.add(chosenColor);
        console.log(classes);
    } else {
        classes.remove(classes[1]);
        console.log(classes);
        classes.add(chosenColor);
    }
    
    // e.target.addEventListener("click", (e) => {
        
    //     console.log(e.target.classList);
    //     console.log(classes);
    //     classes.remove(chosenColor);
    //     e.target.classList.remove("highlighted");
    //     console.log(e.target.classList);
    //     console.log(classes);
    // });
}