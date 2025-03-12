const itemsUlRef = document.querySelector('#items');
const cartUlRef = document.querySelector('#cart');
const removeBtnRef = document.querySelector('#remove-item');
const cart = [];
const items = [
   "apple",
   "orange",
   "banana",
   "kiwi",
   "grapes",
   "strawberry",
];

function removeItem(){
   cart.shift();
   showCart();
}

function showCart(){
   cartUlRef.innerHTML = "";
   for (let i = 0; i < cart.length; i++){
      cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
   }
}

function addToCart(e){
   cart.push(e.target.dataset.name)
   showCart();
   console.log(cart);
}


for (let i = 0; i < items.length; i++){
   const newLi = document.createElement('li');
   newLi.innerHTML = items[i];

   const newBtn = document.createElement('button');
   newBtn.innerHTML = "+";
   newBtn.dataset.name = items[i];
   newBtn.onclick = addToCart;
   itemsUlRef.appendChild(newBtn);

   itemsUlRef.appendChild(newLi);
}

removeBtnRef.onclick = removeItem;


