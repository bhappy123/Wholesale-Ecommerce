// Variables
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
cartBtn.addEventListener("click", show);
function show(ev){
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("show-cart");
}
closeCartBtn.addEventListener("click", hide);
function hide(ev){
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("show-cart");
}

// Cart 
let cart = [];
// Getting Products
class Products{
async getProduct(){

    try{
       let result = await fetch("products.json");
       let data = await result.json();
       return data;
    }
    catch(error){
        console.log(error);
    }

}
}


// Display Products
class UI{


}
// Local Storage
class Storage{

}
document.addEventListener("DOMContentLoaded", ()=>{
const ui = new UI();
const products = new Products();
// get All Products


});
