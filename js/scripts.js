function Pizza(pizzaSize, toppings, premiumToppings, crust) {
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
  if (this.pizzaSize === "Small") {
    sizePrice = 12;
  } else if (this.pizzaSize === "Medium") {
    sizePrice = 14;
  } else if (this.pizzaSize === "Large") {
    sizePrice = 18;
  } else {}
  if (this.pizzaSize === "Small" || this.pizzaSize === "Medium") {
    toppingPrice = this.toppings * 1 + this.premiumToppings * 2;
  } else if (this.pizzaSize === "Large") {
    toppingPrice = this.toppings * 1.5 + this.premiumToppings * 3;
  } else {}
  if (this.crust === "Classic") {

  } else {
    crustPrice = 2;
  }
  pizzaPrice = sizePrice + toppingPrice + crustPrice;
  return pizzaPrice;
}
