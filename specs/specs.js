describe('Pizza', function() {
  it("creates a new Pizza object with properties for name, size. topping numbers, and crust type", function() {
    var testPizza = new Pizza("test", "Large", ["Roasted Garlic", "Red Pepper", "Sausage"], ["Pesto", "Calabrian Chili"], "Classic");
    expect(testPizza.pizzaName).to.equal("test");
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.toppings).to.eql(["Roasted Garlic", "Red Pepper", "Sausage"]);
    expect(testPizza.premiumToppings).to.eql(["Pesto", "Calabrian Chili"]);
    expect(testPizza.crust).to.equal("Classic");
  });
  it("adds the price method to all pizzas to calculate price", function() {
    var testPizza = new Pizza("test", "Large", ["Roasted Garlic", "Red Pepper", "Sausage"], ["Pesto", "Calabrian Chili"], "Classic");
    expect(testPizza.price()).to.equal(28.5);
  });
  it("charges $12 for a small pizza", function() {
    var testPizza = new Pizza("test", "Small", [], [], "Classic");
    expect(testPizza.price()).to.equal(12);
  });
  it("charges $1 per topping for a small pizza", function() {
    var testPizza = new Pizza("test", "Small", ["Pepperoni"], [], "Classic");
    expect(testPizza.price()).to.equal(13);
  });
  it("charges $2 per premium topping for a small pizza", function() {
    var testPizza = new Pizza("test", "Small", [], ["Pesto"], "Classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $14 for a medium pizza", function() {
    var testPizza = new Pizza("test", "Medium", [], [], "Classic");
    expect(testPizza.price()).to.equal(14);
  });
  it("charges $1 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "Medium", ["Pepperoni"], [], "Classic");
    expect(testPizza.price()).to.equal(15);
  });
  it("charges $2 per topping for a medium pizza", function() {
    var testPizza = new Pizza("test", "Medium", [], ["Pesto"], "Classic");
    expect(testPizza.price()).to.equal(16);
  });
  it("charges $18 for a large pizza", function() {
    var testPizza = new Pizza("test", "Large", [], [], "Classic");
    expect(testPizza.price()).to.equal(18);
  });
  it("charges $1.50 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "Large", ["Pepperoni"], [], "Classic");
    expect(testPizza.price()).to.equal(19.50);
  });
  it("charges $3 per topping for a large pizza", function() {
    var testPizza = new Pizza("test", "Large", [], ["Pesto"], "Classic");
    expect(testPizza.price()).to.equal(21);
  });
  it("charges $2 for a special crust", function() {
    var testPizza = new Pizza("test", "Medium", [], [], "gluten free");
    expect(testPizza.price()).to.equal(16);
  });
});
