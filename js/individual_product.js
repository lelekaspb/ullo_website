const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
console.log(bigImageWidth);
document.querySelector(".product").style.setProperty("--dynamic-width", `${bigImageWidth}px`);

const sellpointVisualWidth = document.querySelector(".sellpoint_visual").offsetWidth;
console.log(sellpointVisualWidth);
document.querySelector(".sellpoints").style.setProperty("--sellpoint-width", `${sellpointVisualWidth}px`);

const mql = window.matchMedia("(max-width: 450px)");

function countDynamicWidth() {
    const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
    document.querySelector(".product").style.setProperty("--dynamic-width", `${bigImageWidth}px`);
    const sellpointVisualWidth = document.querySelector(".sellpoint_visual").offsetWidth;
    document.querySelector(".sellpoints").style.setProperty("--sellpoint-width", `${sellpointVisualWidth}px`);
    if (mql.matches) {
      console.log("This is a narrow screen — less than 450px wide.");
      document.querySelector(".flexibility .sellpoint_text > p").textContent = "With Ullo remote you can take the light with you.";
      document.querySelector(".colors .sellpoint_text > p").textContent = "With Ullo you get 16 million unique colors per unit of light.";
    } else {
      console.log("This is a wide screen — more than 450px wide.");
      document.querySelector(".flexibility .sellpoint_text > p").textContent = "With Ullo Remote you have the ability to control your light without the use of WiFi. You can therefore also take the light with you.";
      document.querySelector(".colors .sellpoint_text > p").textContent = "With 16 million unique colors per unit of light, you can count on near-infinite color combinations in your home.";
    };
}

window.onresize = countDynamicWidth;



// quantity plus and minus
let quantity = document.querySelector("input.quantity").value;
document.querySelector(".btn_quantity.minus").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
    } else {
        return;
    }
    document.querySelector("input.quantity").value = quantity;
});

document.querySelector(".btn_quantity.plus").addEventListener("click", () => {
    if (quantity < 10) {
        quantity++;
    } else {
        return;
    }
    document.querySelector("input.quantity").value = quantity;
});


// fetch data from restdb
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url =
  `https://kea0209-5a57.restdb.io/rest/ullo-products/${id}?fetchchildren=true`;

  function getData() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-apikey": "6082d28c28bf9b609975a5db",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        showProduct(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getData();

  
// populate the html page
  const smallImageTemplate = document.querySelector(".small_image_template").content;
  const smallImageParent = document.querySelector(".image_wrapper");
  let i = 1;

  function showProduct(product) {
    document.querySelector(".big_image").src = product.images[0].link;
    document.querySelector(".big_image").alt = product.title;
    product.images.forEach((image) => {
        console.log(image.link);
        const smallImageClone = smallImageTemplate.cloneNode(true);
        console.log(smallImageClone);
        smallImageClone.querySelector(".small_image_wrapper").classList.add(`image_${i}`);
        smallImageClone.querySelector(".small_image").src = image.link;
        smallImageClone.querySelector(".small_image").alt = product.title;
        smallImageParent.appendChild(smallImageClone);
        i++;
    });
    document.querySelector(".title").textContent = product.title;
    document.querySelector(".price > span").textContent = product.price_current;
    document.querySelector(".description").textContent = product.description;
  }

  function changeImage(smallImage) {
    const bigImage = document.querySelector(".big_image");
    bigImage.src = smallImage.src;
  }


