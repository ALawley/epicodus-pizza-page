function Pizza(pizzaSize, toppings, premiumToppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.premiumToppings = premiumToppings;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0
  var toppingPrice = 0
  if (this.pizzaSize === "Small") {
    pizzaPrice = 12;
  } else if (this.pizzaSize === "Medium") {
    pizzaPrice = 14;
  } else if (this.pizzaSize === "Large") {
    pizzaPrice = 18;
  } else {}
  if (this.pizzaSize === "Small" || this.pizzaSize === "Medium") {
    toppingPrice = this.toppings * 1 + this.premiumToppings * 2;
  } else if (this.pizzaSize === "Large") {
    toppingPrice = this.toppings * 1.5 + this.premiumToppings * 3;
  }
  pizzaPrice = pizzaPrice + toppingPrice
  return pizzaPrice;
}
