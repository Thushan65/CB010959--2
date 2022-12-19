if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} 
else {
    ready()
}

cart = [];

//Getting ready
function ready() {
    var ItemRemoveButtons = document.getElementsByClassName('btnremove')
    for (var i = 0; i < ItemRemoveButtons.length; i++) {
        var button = ItemRemoveButtons[i]
        button.addEventListener('click', ItemRemove)
    }

    var quantityInputs = document.getElementsByClassName('cartqi')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('itemb')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', AddtoCart1)
    }

    document.getElementsByClassName('btnfavourite')[0].addEventListener('click', AddtoFavourite)
}

//Adding items to the local storage 
function AddtoFavourite() {    
    var cartItems = document.getElementsByClassName('cartitems')[0]
    while (cartItems.hasChildNodes()) {
        localStorage.removeItem("favorites")
        localStorage.setItem("favorites", JSON.stringify(cart))
        console.log(localStorage)
        cartItems.removeChild(cartItems.firstChild)


        const cartDetails = lc.innerHTML;
        localStorage.setItem("favorites1", cartDetails);
    }
    UpdateTotall()
}

//Removing items from the cart
function ItemRemove(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    UpdateTotall()
}

//Changing quentity
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    UpdateTotall()
}

function AddtoCart1(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('itemt')[0].innerText
    var price = shopItem.getElementsByClassName('itemp')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('itemi')[0].src
    AddtoCart(title, price, imageSrc)
    UpdateTotall()
    cart.push(title)
    
}

//Adding items into the cart
function AddtoCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cartrow')
    var cartItems = document.getElementsByClassName('cartitems')[0]
    var cartItemNames = cartItems.getElementsByClassName('cartit')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="carti cartc">
            <img class="cartii" src="${imageSrc}" width="100" height="100">
            <span class="cartit">${title}</span>
        </div>
        <span class="cartpp cartc">${price}</span>
        <div class="cartq cartc">
            <input class="cartqi" type="number" value="1">
            <button class="btn btnremove" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btnremove')[0].addEventListener('click', ItemRemove)
    cartRow.getElementsByClassName('cartqi')[0].addEventListener('change', quantityChanged)
}

//Updating cart total
function UpdateTotall() {
    var cartItemContainer = document.getElementsByClassName('cartitems')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cartrow')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cartpp')[0]
        var quantityElement = cartRow.getElementsByClassName('cartqi')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cartp')[0].innerText = '$' + total
}

let addOrder = document.getElementById("btnorder");
addOrder.addEventListener("click", AddtoOrder);

//Ordering the favourite order
function AddtoOrder(){

    const favorites1 = localStorage.getItem("favorites1");
    lc.innerHTML = favorites1;

	localStorage.removeItem("favorites");
    localStorage.removeItem("favorites1");

}

let loyalty = document.getElementById("btnloyalty");
loyalty.addEventListener("click", checkLoyalty);

//Loyalty points
function checkLoyalty(){
    let length = cart.length;
    if (length > 3){
        points = length * 20;
        localStorage.setItem('Loyalty points: ', points)
        console.log(localStorage);
        document.getElementById("points").innerText = `You have earned ${points} loyalty points`
    }
    else{
        document.getElementById("points").innerText = 'You have earned 0 loyalty points'
    }
}

let Purchase=document.getElementById("btnpurchase");
Purchase.addEventListener("click",Purchase1);

//Directly purchase the order form the cart
function Purchase1(){

    alert(`Order Completed!!!\nThank you for ordering with us!!!`);

    document.location.reload(true)
}