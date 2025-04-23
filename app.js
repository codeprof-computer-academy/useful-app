// logic to display current year
document.querySelector(".year").innerHTML = new Date().getFullYear()

// logic to display the navbar
const navbar = document.querySelector("nav")
const menu_btn  = document.querySelector(".menu")

menu_btn.addEventListener("click", function(){
         navbar.classList.toggle("show-nav")
})