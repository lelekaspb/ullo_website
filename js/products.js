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
    //console.log(bulb);
    const productClone = productTemplate.cloneNode(true);
    productClone.querySelector(".product_title").textContent = bulb.title;
    if (bulb.price_current == bulb.price_regular) {
        //console.log("not sale");
        productClone.querySelector(".sale").classList.add("hidden");
        productClone.querySelector(".price_number").textContent = bulb.price_current;
    } else {
        //console.log("sale");
        productClone.querySelector(".sale_price").textContent = bulb.price_regular;
        productClone.querySelector(".price_number").textContent = bulb.price_current;
    }
    productClone.querySelector("img").src = bulb.images[0].link;
    productClone.querySelector("img").alt = bulb.title;
    productClone.querySelector(".product_link").href = `individual_product.html?id=${bulb._id}`;
    productClone.querySelector(".title_product_link").href = `individual_product.html?id=${bulb._id}`;
    productParent.appendChild(productClone);
  }

  //sorting feature
  document.querySelector("#sort").addEventListener("change", (e) => {
      console.log(document.querySelector("#sort").value);
      const sortBy = document.querySelector("#sort").value;
      if (sortBy !== "") {
        url = `https://kea0209-5a57.restdb.io/rest/ullo-products?fetchchildren=true&sort=${sortBy}&dir=1`;
      } else {
          url = `https://kea0209-5a57.restdb.io/rest/ullo-products?fetchchildren=true`;
      }      
      productParent.innerHTML = "";
      start();
  });


//   living room in different colors
const colors = document.querySelectorAll(".color");

document.querySelector(".color.color_1").addEventListener("click", changeColor);
document.querySelector(".color.color_2").addEventListener("click", changeColor);
document.querySelector(".color.color_3").addEventListener("click", changeColor);
document.querySelector(".color.color_4").addEventListener("click", changeColor);
document.querySelector(".color.color_5").addEventListener("click", changeColor);
document.querySelector(".color.color_6").addEventListener("click", changeColor);
document.querySelector(".color.color_7").addEventListener("click", changeColor);
document.querySelector(".color.color_8").addEventListener("click", changeColor);

function changeColor(e) {
    console.log("changeColor ");
    
    const theDiv = e.target;
    console.log(`the clicked div is ${theDiv}`);
    console.log(e.target.classList[1]);
    e.target.classList.add("highlighted");
    colors.forEach((color) => {
      // console.log(color);
      // console.log(e.target);
        if (color !== theDiv) {
          //console.log(color + "is not equal to" + theDiv);
            color.classList.remove("highlighted");
            color.removeEventListener("click", changeToNoColor);
            color.addEventListener("click", changeColor);
        }
    });
    const chosenColor = theDiv.classList[1];
    console.log("the chosen color is " + chosenColor);
    const classes = document.querySelector(".moods").classList;
    //console.log(classes);
    if (classes.length == 1) {
        classes.add(chosenColor);
        //console.log(classes);
    } else {
        classes.remove(classes[1]);
        //console.log(classes);
        classes.add(chosenColor);
    }

    theDiv.removeEventListener("click", changeColor);
    theDiv.addEventListener("click", changeToNoColor);
}

function changeToNoColor(e) {
  console.log("changeToNoColor function");
  console.log(e);
  console.log(this);
  const theDiv = e.target;
  theDiv.classList.remove("highlighted");
  const moods = document.querySelector(".moods");
  moods.className = "moods";
  console.log(moods);
  console.log(theDiv);
  theDiv.removeEventListener("click", changeToNoColor);
  theDiv.addEventListener("click", changeColor);
}