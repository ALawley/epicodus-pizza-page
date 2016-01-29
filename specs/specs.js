describe('Pizza', function() {
  it("creates a new Pizza object with properties for name, size. topping numbers, and crust type", function() {
    var testPizza = new Pizza("test", "large", 3, 2, "classic");
    expect(testPizza.pizzaName).to.equal("test");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.toppings).to.equal(3);
    expect(testPizza.premiumToppings).to.equal(2);
    expect(testPizza.crust).to.equal("classic");
  });
  it("adds the price method to all pizzas to calculate price", function() {
    var testPizza = new Pizza("test", "large", 3, 2, "classic");
    expect(testPizza.price()).to.equal(28.5);
  });
  it("charges $12 for a small pizza", function() {
    var testPizza = new Pizza("test", "small", 0, 0, "classic");
    expect(testPizza.price()).to.equal(12);
  });
  it("charges $1 per topping for a small pizza", function() {
    var testPizza = new Pizza("test", "small", 1, 0, "classic");
    expect(testPizza.price()).to.equal(13);
  });
  it("charges $2 per premium topping for a small pizza", function() {
    var testPizza = new Pizza("test", "small", 0, 1, "classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $14 for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", 0, 0, "classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $1 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", 1, 0, "classic");
    expect(testPizza.price()).to.equal(15);
  });
  it("charges $2 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", 0, 1, "classic");
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $18 for a large pizza", function() {
    var testPizza = new Pizza("test", "large", 0, 0, "classic");
    expect(testPizza.price()).to.equal(18);
  });
  it("charges $1.50 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "large", 1, 0, "classic");
    expect(testPizza.price()).to.equal(19.50);
  });
  it("charges $3 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "large", 0, 1, "classic");
    expect(testPizza.price()).to.equal(21);
  });
  it("charges $2 for a special crust", function() {
    var testPizza = new Pizza("test", "medium", 0, 0, "gluten free");
    expect(testPizza.price()).to.equal(16);
  });
});
