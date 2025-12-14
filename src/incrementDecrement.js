import { cartProductsTotal } from "./cartProductTotal";
import { formatPrice } from "./formatPrice";
import { getCartProductsFromLS } from "./getCartProducts";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductsFromLS();

    let existingProducts = localCartProducts.find((curProd) => {
        return curProd.id === id;
    });

    if(existingProducts) {
        quantity = existingProducts.quantity;
        localStoragePrice = existingProducts.price;
    } else {
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === "cartIncreament"){
        if(quantity < stock) {
            quantity += 1;
        } else if(quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }

    if(event.target.className === "cartDecreament") {
        if(quantity > 1) {
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = {id, quantity, price: localStoragePrice};
    updatedCart = localCartProducts.map((curProd) => {
        return curProd.id === id ? updatedCart : curProd;
    });
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = formatPrice(localStoragePrice);

    cartProductsTotal();
};