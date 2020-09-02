const BURGER = document.querySelector(".fa-bars");
const NAVBAR = document.querySelector(".navbar");
const BODY = document.querySelector("body");


BURGER.onclick = showOrNotShowMenu;

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
        PRODUCTS.style.opacity=1;
        
    }
}

