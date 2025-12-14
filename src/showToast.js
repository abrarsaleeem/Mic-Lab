export const showToast = (operation) => {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add") {
        toast.textContent = "Item added to cart.";
    } else {
        toast.textContent = "Item removed from cart.";
    }

    document.body.append(toast);

    setTimeout(() => {
        toast.remove();
    }, 2200);
};