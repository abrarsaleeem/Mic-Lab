import products from "../api/products.json";
import { cartProductsTotal } from "./cartProductTotal";
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { formatPrice } from "./formatPrice";
import { getCartProductsFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { navbar } from "./navbar";
import { removeProductsFromCart } from "./removeProductsFromCart";

navbar();

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => {
        return curElem.id === curProd.id;
    })
});
console.log(filterProducts);

const cartTemplate = document.getElementById("productCartTemplate");
const cartContainer = document.getElementById("productCartContainer");

const showCartProducts = () => {
    filterProducts.forEach((curProd) => {
        const {id, image, name, price, stock} = curProd;
        let productClone = document.importNode(cartTemplate.content, true);

        let lSActualData = fetchQuantityFromLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = formatPrice(lSActualData.price);

        productClone.querySelector(".stockElement").addEventListener("click", (event) => {
            incrementDecrement(event, id, stock, price);
        });

        productClone.querySelector(".remove-to-cart-button").addEventListener("click", () => removeProductsFromCart(id));

        cartContainer.append(productClone);
    })
};

showCartProducts();

cartProductsTotal();