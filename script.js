const BURGER = document.querySelector(".fa-bars");
const NAVBAR = document.querySelector(".navbar");
const PRODUCTS = document.querySelector(".products");

BURGER.onclick = showOrNotShowMenu;
PRODUCTS.onclick = showOrNotShowMenuForProducts;

function showOrNotShowMenu(){
    if(NAVBAR.style.display=="block"){
        NAVBAR.style.display="none";
       
}
else
{
    NAVBAR.style.display="block";
   
}
}

function showOrNotShowMenuForProducts(){
    if(NAVBAR.style.display=="block"){
        NAVBAR.style.display="none";
        
        
    }
}

