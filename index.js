var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  cart.push({[item]: Math.random(0, 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var statement = `In your cart, you have `;
  if(cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
        var cartKey = Object.keys(cart[i])
        statement += (`${cartKey} at $${cart[i][cartKey]}, `);
    }
    statement = statement.slice(0,-2);
    console.log(`${statement}.`);
  }
  else{
    console.log(`Your shopping cart is empty.`);
  }
}

var total = function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i][Object.keys(cart[i])];
  }
  return total;
}

function removeFromCart(item) {
  var originalCartLength = cart.length;
  for (var i = 0; i < cart.length; i++) {
    var name = Object.keys(cart[i]);
    if (name == item) {
      cart = [...cart.splice(0,i), ...cart.splice(i+1, -1)]
    }
  }
  if (originalCartLength === cart.length) {
    console.log(`That item is not in your cart.`);
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber == null) {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
