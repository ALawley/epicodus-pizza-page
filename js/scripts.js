function Pizza(pizzaName, pizzaSize, toppings, premiumToppings, crust) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.premiumToppings = premiumToppings;
  this.crust = crust;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;
  var sizePrice = 0;
  var toppingPrice = 0;
  var crustPrice = 0;
  if (this.pizzaSize === "small") {
    sizePrice = 12;
  } else if (this.pizzaSize === "medium") {
    sizePrice = 14;
  } else if (this.pizzaSize === "large") {
    sizePrice = 18;
  } else {}
  if (this.pizzaSize === "small" || this.pizzaSize === "medium") {
    toppingPrice = this.toppings * 1 + this.premiumToppings * 2;
  } else if (this.pizzaSize === "large") {
    toppingPrice = this.toppings * 1.5 + this.premiumToppings * 3;
  } else {}
  if (this.crust === "classic") {

  } else {
    crustPrice = 2;
  }
  pizzaPrice = sizePrice + toppingPrice + crustPrice;
  return pizzaPrice;
}
