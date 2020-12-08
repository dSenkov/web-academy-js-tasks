function Calculator() {
  this.read = function () {
    this.firstValue = Number(prompt("Enter first value:"));
    this.secondValue = Number(prompt("Enter second value:"));
    if (isNaN(this.firstValue) || isNaN(this.secondValue)) {
      alert("Please enter valid numbers!");
      this.read();
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
    alert("value = " + this.value + '. Start of function call.');
    let additional = Number(prompt("How many to add ?"));
    alert("additional = " + additional);
    if (isNaN(additional)) {
      alert("Please enter valid number!");
      this.read();
    }
    this.value += additional;
    alert("value = " + this.value + '. End of function call.');
  };
}

function testAccumulator() {
  let accumulator = new Accumulator(4);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
}

// testCalculator()
testAccumulator();
