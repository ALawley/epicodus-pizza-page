// Business logic

// Creates an order object to track all pizzas in the order.
function Order() {
  this.total = 0;
  this.pizzas = 0;
}

// Creates a pizza object
function Pizza(pizzaName, pizzaSize, toppings, premiumToppings, crust) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.toppingnum = this.toppings.length
  this.premiumToppings = premiumToppings;
  this.premiumnum = this.premiumToppings.length
  this.crust = crust;
}

// Calculates the price of a pizza, accounting for its size, toppings, and crust.
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
    toppingPrice = this.toppingnum * 1 + this.premiumnum * 2;
  } else if (this.pizzaSize === "Large") {
    toppingPrice = this.toppingnum * 1.5 + this.premiumnum * 3;
  } else {}
  if (this.crust === "Classic") {

  } else {
    crustPrice = 2;
  }
  pizzaPrice = sizePrice + toppingPrice + crustPrice;
  return pizzaPrice;
}

// UI logic

// puts every checked regular topping into an array
var getToppings = function() {
  var allToppings = [];
  $(".regular:checked").each(function() {
    allToppings.push($(this).val());
  })
  return allToppings;
}

// puts every checked premium topping into an array
var getPremium = function() {
  var allPremium = [];
  $(".premium:checked").each(function() {
    allPremium.push($(this).val());
  })
  return allPremium;
}

// turns an array into a neatly spaced string for listing toppings
var arrayToString = function(array) {
  var outputString = "";
  array.forEach(function(element) {
    outputString += element + ", "
  });
  outputString = outputString.slice(0, -2);
  return outputString;
}

$(document).ready(function() {
  var newOrder = new Order(); // creates a new order for the page
  $("form#orderform").submit(function(event) {
    event.preventDefault();
    // gets input from page, including running the functions for the toppings
    var name = $("input#pizza-name").val();
    var size = $('input:radio[name="sizeradio"]:checked').val();
    var toppings = getToppings();
    var premium = getPremium();
    var crust = $('input:radio[name="crustradio"]:checked').val();
    // checks to make sure user input a name for their pizza
    if (name === "") {
      alert("Please enter a name for your pizza.")
      return;
    } else {
      // feeds user input into the Pizza constructor to add a new pizza and increments Order accordingly.
      var newPizza = new Pizza(name, size, toppings, premium, crust);
      newOrder.total += newPizza.price();
      newOrder.pizzas += 1;

      // adds new pizza to the list of pizzas
      $("ul#pizzas").append("<li class='pizza'><span>" + newPizza.pizzaName + " - $" + newPizza.price().toFixed(2) +  "</span></li>");
      // when a pizza is clicked in the list, it gets the "active" class and all others lose the "active" class and we display its info.
      $(".pizza").last().click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#show-pizza").show();
        $(".pizza-size").text(newPizza.pizzaSize);
        $(".toppings-list").text(arrayToString(newPizza.toppings));
        $(".premium-list").text(arrayToString(newPizza.premiumToppings));
        $(".pizza-crust").text(newPizza.crust + " Crust");
        $(".pizza-price").text("$" + newPizza.price().toFixed(2));
      });
      // print order total info
      $(".order-count").text(newOrder.pizzas);
      $(".order-total").text("$" + newOrder.total.toFixed(2));
      // clear the name and topping checkbox inputs
      $("input#pizza-name").val("");
      $("input.regular").attr('checked', false);
      $("input.premium").attr('checked', false);
    }
  });
  // when the remove pizza button is clicked, we delete the active pizza from the list, remove 1 pizza from the order, decrease the total by the active pizza's listed price, update the order info and hide the pizza info section.
  $("#pizza-remove").click(function() {
    $(".active").remove();
    newOrder.pizzas -= 1;
    newOrder.total -= parseFloat($(".pizza-price").text().slice(1)); //this looks messy, but basically pulls text from the info section for the price, removes the "$" at the start, and converts it to a number so we know how much to decrease the total by.
    $(".order-count").text(newOrder.pizzas);
    $(".order-total").text("$" + newOrder.total.toFixed(2));
    $("#show-pizza").hide();
  });
});
