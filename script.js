const BURGER = document.querySelector(".fa-bars");
const MENU = document.querySelector(".menu");
const PRODUCTS = document.querySelector(".products");

// if(menu.style.display=="none"){
// burger.classList.toggle("mystyle");
// }
// else
// {
//     burger.classList.toggle("mystyle");
// }

BURGER.onclick = showOrNotShowMenu;
PRODUCTS.onclick = showOrNotShowMenuForProducts;


function showOrNotShowMenu(){
    if(MENU.style.display=="block"){
        MENU.style.display="none";
        BURGER.style.display="block";

    // PRODUCTS.style.marginTop="0";
}
else
{
    MENU.style.display="block";
    MENU.style.width="100vw";
    BURGER.style.display="none";
    // PRODUCTS.style.marginTop="250px";
}
}

function showOrNotShowMenuForProducts(){
    if(MENU.style.display=="block"){
        MENU.style.display="none";
        BURGER.style.display="block";
    }
}