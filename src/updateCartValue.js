export const updateCartValue = (cartProducts) => {
    const allCartCounts = document.querySelectorAll('.cart-count'); 
    allCartCounts.forEach(counter => {
        counter.textContent = cartProducts.length; 
    });
};