const ham = document.querySelector(".ham")
const nav = document.querySelector(".menu")

ham.addEventListener("click", () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
})

document.querySelectorAll(".per-menu").forEach(n => n.addEventListener ("click", () => {
    ham.classList.remove("active");
    nav.classList.remove("active");
}))