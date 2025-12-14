import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./quantityToggle";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
    products.forEach((curProd) => {
        const { id, name, price, stock, image } = curProd;
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productPrice").textContent = `Rs. ${price.toLocaleString()}`;
        productClone.querySelector(".productActualPrice").textContent = `Rs. ${(price * 2).toLocaleString()}`;
        
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            homeQuantityToggle(event, id, stock);
        });

        productClone.querySelector(".add-to-cart-button").addEventListener("click", (event) => {
            addToCart(event, id, stock);
        });
        productContainer.append(productClone);
    });
};