function Calculator() {
  this.read = function () {
    this.firstValue = Number(prompt("Enter first value:"));
    this.secondValue = Number(prompt("Enter second value:"));
    if (isNaN(this.firstValue) || isNaN(this.secondValue)) {
      alert("Please enter valid numbers!");
      this.read();
      return;
    }
  };

  this.sum = function () {
    return this.firstValue + this.secondValue;
  };

  this.mul = function () {
    return this.firstValue * this.secondValue;
  };
}

function testCalculator() {
  let calculator = new Calculator();
  calculator.read();
  alert("Sum = " + calculator.sum());
  alert("Mul = " + calculator.mul());
}

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let additional = Number(prompt("How many to add ?"));
    if (isNaN(additional)) {
      alert("Please enter valid number!");
      this.read();
      return;
    }
    this.value += additional;
  };
}

function testAccumulator() {
  let accumulator = new Accumulator(4);
  accumulator.read();
  accumulator.read();
  alert("Result = " + accumulator.value);
}

testCalculator()
//testAccumulator();
