const sellpointVisualWidth =
  document.querySelector(".sellpoint_visual").offsetWidth;
console.log(sellpointVisualWidth);
document
  .querySelector(".sellpoints")
  .style.setProperty("--sellpoint-width", `${sellpointVisualWidth}px`);

const mql = window.matchMedia("(max-width: 450px)");
function countDynamicWidth() {
  const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
  document
    .querySelector(".product")
    .style.setProperty("--dynamic-width", `${bigImageWidth}px`);
  const sellpointVisualWidth =
    document.querySelector(".sellpoint_visual").offsetWidth;
  document
    .querySelector(".sellpoints")
    .style.setProperty("--sellpoint-width", `${sellpointVisualWidth}px`);
  if (mql.matches) {
    console.log("This is a narrow screen — less than 450px wide.");
    document.querySelector(".flexibility .sellpoint_text > p").textContent =
      "With Ullo remote you can take the light with you.";
    document.querySelector(".colors .sellpoint_text > p").textContent =
      "With Ullo you get 16 million unique colors per unit of light.";
  } else {
    console.log("This is a wide screen — more than 450px wide.");
    document.querySelector(".flexibility .sellpoint_text > p").textContent =
      "With Ullo Remote you have the ability to control your light without the use of WiFi. You can therefore also take the light with you.";
    document.querySelector(".colors .sellpoint_text > p").textContent =
      "With 16 million unique colors per unit of light, you can count on near-infinite color combinations in your home.";
  }
}

window.onresize = countDynamicWidth;
