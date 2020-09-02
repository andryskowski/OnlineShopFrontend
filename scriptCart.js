let add_to_bag = document.querySelector('.add-to-bag');
let cartView = document.querySelector('.cartView');
let cartButton = document.querySelector('.cartButton');

cartButton.addEventListener('click', () =>  { 
    
    if(cartView.style.display=='flex')
    {
        cartView.style.display='none';
    }
    else
    {
        cartView.style.display='flex';
        displayCart();
    }

})

let product = {
    name: document.querySelector('.name').innerHTML,
    tag: document.querySelector('.tag').innerHTML,
    price: document.querySelector('.price').innerHTML,
    inCart: 0
};


add_to_bag.addEventListener('click', () =>  { addItemToCart(product);
 })

 function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');


    if(productNumbers){
        document.querySelector('.cartButton span').textContent = productNumbers;
    }
}

function addItemToCart(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers ){
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cartButton span').textContent = productNumbers +1;
    }
    else
    {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cartButton span').textContent = 1;
    }
    setProducts(product);
    totalCost(product);
    
}

function setProducts(product){

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag]==undefined) {
        cartItems = {
            ...cartItems,
            [product.tag]: product
        }
    }
    cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost() {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + parseInt(product.price));
    } else{
        localStorage.setItem("totalCost", product.price);
    }
}

onLoadCartNumbers();



function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    // let productContainer = document.querySelector(".products");
    let totalCost = localStorage.getItem("totalCost");
    cartView.innerHTML='';
    cartView.innerHTML='<h2>your shopping bag:</h2>';
    Object.values(cartItems).map(item => {
    cartView.innerHTML += '<div class="productInCart">' + '<img src = "img/' + item.tag + '.jpg"></h5> </div> ' + '<div class="productInCart" > <h4>' + item.name + '</h4> </div> <h5>' + item.price + '$</h5> </div> '
    + '</h5> </div> <h5>quantity: ' + item.inCart + '</h5> </div> ' + '</div>';
    }) ;
    cartView.innerHTML += '<h3 class="total"> Total: '+ totalCost + '$</h3';
}
displayCart(); 
