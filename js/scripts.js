function Order() {
  this.total = 0;
  this.pizzas = 0;
}

function Pizza(pizzaName, pizzaSize, toppings, premiumToppings, crust) {
  this.pizzaName = pizzaName;
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
  this.toppingnum = this.toppings.length
  this.premiumToppings = premiumToppings;
  this.premiumnum = this.premiumToppings.length
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

var getToppings = function() {
  var allToppings = [];
  $(".regular:checked").each(function() {
    allToppings.push($(this).val());
  })
  return allToppings;
}

var getPremium = function() {
  var allPremium = [];
  $(".premium:checked").each(function() {
    allPremium.push($(this).val());
  })
  return allPremium;
}

var arrayToString = function(array) {
  var outputString = "";
  array.forEach(function(element) {
    outputString += element + ", "
  });
  outputString = outputString.slice(0, -2);
  return outputString;
}

var stringToArray = function(str) {
  return str.split(" ");
}

var textGrab = function(element) {
  return $(element).text();
}

$(document).ready(function() {
  var newOrder = new Order();
  $("form#orderform").submit(function(event) {
    event.preventDefault();
    var name = $("input#pizza-name").val();
    var size = $('input:radio[name="sizeradio"]:checked').val();
    var toppings = getToppings();
    var premium = getPremium();
    var crust = $('input:radio[name="crustradio"]:checked').val();
    if (name === "") {
      alert("Please enter a name for your pizza.")
      return;
    } else {
      var newPizza = new Pizza(name, size, toppings, premium, crust);
      newOrder.total += newPizza.price();
      newOrder.pizzas += 1;

      $("ul#pizzas").append("<li class='pizza'><span>" + newPizza.pizzaName + " - $" + newPizza.price().toFixed(2) +  "</span></li>");
      $(".pizza").last().click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $("#show-pizza").show();
        $(".pizza-size").text(newPizza.pizzaSize);
        $(".toppings-list").text(arrayToString(newPizza.toppings));
        $(".premium-list").text(arrayToString(newPizza.premiumToppings));
        $(".pizza-crust").text(newPizza.crust + " Crust");
        $(".pizza-price").text("$" + newPizza.price().toFixed(2));
      });

      $(".order-count").text(newOrder.pizzas);
      $(".order-total").text("$" + newOrder.total.toFixed(2));

      $("input#pizza-name").val("");
      $("input.regular").attr('checked', false);
      $("input.premium").attr('checked', false);
    }
  });
  $("#pizza-remove").click(function() {
    $(".active").remove();
    newOrder.pizzas -= 1;
    newOrder.total -= parseInt($(".pizza-price").text().slice(1));
    $(".order-count").text(newOrder.pizzas);
    $(".order-total").text("$" + newOrder.total.toFixed(2));
    $("#show-pizza").hide();
  });
});
