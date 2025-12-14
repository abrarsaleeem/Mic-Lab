import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductsFromLS();

export const addToCart = (event, id, stock) => {
    let arrLocalStorageProducts = getCartProductsFromLS();
    const currentProductElement = document.querySelector(`#card${id}`);
    let quantity = currentProductElement.querySelector(".productQuantity").innerText;
    let price = currentProductElement.querySelector(".productPrice").innerText;
    price = price.replace("Rs. ", "").replace(/,/g, "").trim();
    let existingProducts = arrLocalStorageProducts.find((curProd) => {
        return curProd.id === id;
    });
    if(existingProducts && quantity > 1){
        quantity = Number(existingProducts.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};
        updatedCart = arrLocalStorageProducts.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));

        showToast("add");
    }
    if(existingProducts){
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);
    
    arrLocalStorageProducts.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProducts));

    updateCartValue(arrLocalStorageProducts);

    // Toast
    showToast("add");
};