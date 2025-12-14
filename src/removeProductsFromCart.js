import { cartProductsTotal } from "./cartProductTotal";
import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductsFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    cartProducts = cartProducts.filter((curProd) => {
        return curProd.id !== id;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    updateCartValue(cartProducts);
    let removeItem = document.getElementById(`card${id}`);
    if(removeItem) {
        removeItem.remove();
        // Toast
        showToast("delete");
    }
    cartProductsTotal();
};