const toggleBtn = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");

toggleBtn.addEventListener("click", () =>{
    headerNav.classList.toggle("open");
    toggleBtn.classList.toggle("open");
})