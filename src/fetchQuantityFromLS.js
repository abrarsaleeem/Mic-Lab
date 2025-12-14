import { getCartProductsFromLS } from "./getCartProducts";

export const fetchQuantityFromLS = (id, price) => {
    let cartProducts = getCartProductsFromLS();

    let existingProducts = cartProducts.find((curElem) => {
        return curElem.id === id;
    });

    let quantity = 1;

    if(existingProducts) {
        quantity = existingProducts.quantity;
        price = existingProducts.price;
    }

    return {quantity, price};
};