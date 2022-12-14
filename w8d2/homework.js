const titleize = (names, callback) => {
  callback(names.map(name => (
    `Mx. ${name} Jingleheimer Schmidt`
  )))
}

const callback = (array) => {
  array.forEach(name => {
    console.log(name);
  });
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!'`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  let idx = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[idx]}`);
}

let ellie = new Elephant("Ellie", 185, [
  "giving human friends a ride",
  "playing hide and seek",
]);
let charlie = new Elephant("Charlie", 200, [
  "painting pictures",
  "spraying water for a slip and slide",
]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, [
  "trotting",
  "playing tic tac toe",
  "doing elephant ballet",
]);

let herd = [ellie, charlie, kate, micah];

const paradeHelper = (elephant) => {
  console.log(`${elephant.name} is trotting by!`);
};

const dinerBreakfast = () => {
  let order = ["scrambled eggs", "bacon"];
  console.log(`I'd like ${order.join(" and ")}`);
  return (food) => {
    order.push(food);
    console.log(`I'd like ${order.join(" and ")}`);
  }
}