let navBar = document.querySelector(".navbar");
let barsIcon = document.querySelector("#menu-btn");
let cardicon = document.querySelector("#cart-btn");
let containerCards = document.querySelector(".cart-item-container");
let searchIcon = document.querySelector("#search-btn");
let searchBox = document.querySelector(".search-form");
// Function to show nav bar
//  (first-way)
// barsIcon.addEventListener("click",function(){
//     navBar.classList.toggle("active")
// })
// <----------------------------------------------------------------------------------------->
// (second way)
barsIcon.onclick = function () {
  navBar.classList.toggle("active");
  containerCards.classList.remove("active");
  searchBox.classList.remove("active");
};
// <----------------------------------------------------------------------------------------->
// Function to show card items && disappare search and nav
cardicon.onclick = function () {
  containerCards.classList.toggle("active");
  navBar.classList.remove("active");
  searchBox.classList.remove("active");
};
// <----------------------------------------------------------------------------------------->
// Function to show Search icon && disappare card and nav
searchIcon.onclick = function () {
    searchBox.classList.toggle("active");
    navBar.classList.remove("active");
    containerCards.classList.remove("active");
};
// <----------------------------------------------------------------------------------------->
// function for remove all ads on scroll
window.onscroll=()=>{
    navBar.classList.remove("active");
    containerCards.classList.remove("active");
    searchBox.classList.remove("active");

}
