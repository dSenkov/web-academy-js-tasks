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
    return this.firstValue + Number(this.secondValue);
  };

  this.mul = function () {
    return this.firstValue * this.secondValue;
  };
}

let calculator = new Calculator();
calculator.read();
alert("Sum = " + calculator.sum());
alert("Mul = " + calculator.mul());
