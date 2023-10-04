// Menu mở
const open_btn = document.querySelector(".open-btn"); 
// Menu đóng
const close_btn = document.querySelector(".close-btn");
// ds phần tử trong lớp nav
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
    nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
    nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
