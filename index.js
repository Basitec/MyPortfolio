let sideBar = document.querySelector(".showSideBar")
let nav2 = document.querySelector(".two ul")
sideBar.addEventListener("click",function () {
    nav2.style.display="flex"
})
let closed = document.querySelector(".close")

closed.addEventListener("click",function () {
    nav2.style.display="none"
})
// let activePage = window.location.href;
// console.log(activePage)