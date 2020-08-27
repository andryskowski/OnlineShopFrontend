const BURGER = document.querySelector(".fa-bars");
const NAVBAR = document.querySelector(".navbar");
const PRODUCTS = document.querySelector(".products");
const BODY = document.querySelector("body");


BURGER.onclick = showOrNotShowMenu;
PRODUCTS.onclick = showOrNotShowMenuForProducts;

function showOrNotShowMenu(){
    if(NAVBAR.style.display=="block"){
        NAVBAR.style.display="none";
        PRODUCTS.style.opacity=1;
}
else
{
    NAVBAR.style.display="block";
    PRODUCTS.style.opacity=0.3;
}
}

function showOrNotShowMenuForProducts(){
    if(NAVBAR.style.display=="block"){
        NAVBAR.style.display="none";
        PRODUCTS.style.opacity=1;
        
    }
}

