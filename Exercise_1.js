const car = {
  make: "Toyota",
  model: "Corolla",
  color: "blue",
  describe() {
    return `This is a ${this.color} ${this.make} ${this.model}.`;
  },
  updateColor(newColor) {
    this.color = newColor;
    console.log(`Color updated to ${this.color}.`);
  }
};

console.log(car.describe());

car.updateColor("red");
console.log(car.describe());
