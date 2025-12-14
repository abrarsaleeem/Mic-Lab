export const navbar = () => {
    const mobileMenuBtn = document.querySelector(".mobile-menu");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile-nav-active");

    if (mobileMenuBtn.innerHTML.includes("fa-bars")) {
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        mobileMenuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
    });
};