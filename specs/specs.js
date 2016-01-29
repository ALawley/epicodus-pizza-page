describe('Pizza', function() {
  it("creates a new Pizza object with properties for size and topping numbers", function() {
    var testPizza = new Pizza("Large", 3, 2);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.equal(3);
    expect(testPizza.premiumToppings).to.equal(2);
  });
});
