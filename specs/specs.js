describe('Pizza', function() {
  it("creates a new Pizza object with properties for name, size. topping numbers, and crust type", function() {
    var testPizza = new Pizza("test", "large", ["roasted garlic", "red pepper", "sausage"], ["pesto", "calabrian chili"], "classic");
    expect(testPizza.pizzaName).to.equal("test");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.toppings).to.eql(["roasted garlic", "red pepper", "sausage"]);
    expect(testPizza.premiumToppings).to.eql(["pesto", "calabrian chili"]);
    expect(testPizza.crust).to.equal("classic");
  });
  it("adds the price method to all pizzas to calculate price", function() {
    var testPizza = new Pizza("test", "large", ["roasted garlic", "red pepper", "sausage"], ["pesto", "calabrian chili"], "classic");
    expect(testPizza.price()).to.equal(28.5);
  });
  it("charges $12 for a small pizza", function() {
    var testPizza = new Pizza("test", "small", [], [], "classic");
    expect(testPizza.price()).to.equal(12);
  });
  it("charges $1 per topping for a small pizza", function() {
    var testPizza = new Pizza("test", "small", ["pepperoni"], [], "classic");
    expect(testPizza.price()).to.equal(13);
  });
  it("charges $2 per premium topping for a small pizza", function() {
    var testPizza = new Pizza("test", "small", [], ["pesto"], "classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $14 for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", [], [], "classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $1 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", ["pepperoni"], [], "classic");
    expect(testPizza.price()).to.equal(15);
  });
  it("charges $2 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "medium", [], ["pesto"], "classic");
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $18 for a large pizza", function() {
    var testPizza = new Pizza("test", "large", [], [], "classic");
    expect(testPizza.price()).to.equal(18);
  });
  it("charges $1.50 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "large", ["pepperoni"], [], "classic");
    expect(testPizza.price()).to.equal(19.50);
  });
  it("charges $3 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "large", [], ["pesto"], "classic");
    expect(testPizza.price()).to.equal(21);
  });
  it("charges $2 for a special crust", function() {
    var testPizza = new Pizza("test", "medium", [], [], "gluten free");
    expect(testPizza.price()).to.equal(16);
  });
});
