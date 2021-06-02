const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
console.log(bigImageWidth);
document.querySelector(".product").style.setProperty("--dynamic-width", `${bigImageWidth}px`);

function countDynamicWidth() {
    const bigImageWidth = document.querySelector(".image_wrapper").offsetWidth;
    //console.log(bigImageWidth);
    document.querySelector(".product").style.setProperty("--dynamic-width", `${bigImageWidth}px`);
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