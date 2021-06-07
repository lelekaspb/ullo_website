const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
console.log(bigImageWidth);
document.querySelector(".cart").style.setProperty("--dynamic-width", `${bigImageWidth}px`);

const mql = window.matchMedia("(max-width: 500px)");

function countDynamicWidth() {
    const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
    document.querySelector(".cart").style.setProperty("--dynamic-width", `${bigImageWidth}px`);
    
    if (mql.matches) {
      console.log("This is a narrow screen — less than 500px wide.");
      document.querySelector(".coupon button > span").innerHTML = "";
    } else {
      console.log("This is a wide screen — more than 500px wide.");
      document.querySelector(".coupon button > span").innerHTML  = "Apply coupon ";
    };
}

window.onresize = countDynamicWidth;