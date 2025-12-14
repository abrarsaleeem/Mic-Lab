import { formatPrice } from "./formatPrice";
import { getCartProductsFromLS } from "./getCartProducts";

export const cartProductsTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productTotal = document.querySelector(".productTotal");

    let cartProducts = getCartProductsFromLS();
    let initialValue = 0;
    let totalProductPrice = cartProducts.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue);
    
    productSubTotal.textContent = formatPrice(totalProductPrice);
    productTotal.textContent = formatPrice(totalProductPrice + 150);
};