describe('Pizza', function() {
  it("creates a new Pizza object with properties for size and topping numbers", function() {
    var testPizza = new Pizza("Large", 3, 2, "Classic");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.equal(3);
    expect(testPizza.premiumToppings).to.equal(2);
    expect(testPizza.crust).to.equal("Classic");
  });
  it("adds the price method to all pizzas to calculate price", function() {
    var testPizza = new Pizza("Large", 3, 2, "Classic");
    expect(testPizza.price()).to.equal(28.5);
  });
});
