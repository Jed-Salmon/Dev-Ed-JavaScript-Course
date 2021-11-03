// 7. Prototypal inheritance

function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};

Enemy.prototype.block = function () {
  console.log(`${this.name} has blocked.`);
};

// More specific enemy (dragon).
// Create another constructor function which will...
// Inherit all the properties & methods to our new enemy:

function Dragon(life, name, level, colour, spell) {
  // Inherit all properties of enemy:
  Enemy.call(this, life, name, level); // Uses 'call' to reference 'this' to dragon.
  // Enemy.call runs the constructor function (Enemy), but with the context of 'this' being dragon.

  // Define new params as normal:
  this.colour = colour;
  this.spell = spell;
}

// Inherit methods of Enemy (Inherit Prototype):
Dragon.prototype = Object.create(Enemy.prototype);
// Creates new object with the prototype set to whatever we set inside the parenthesis.
// Allows us to chain together multiple prototypes.

Dragon.prototype.fireBreath = function () {
  console.log("FIRE BREATHHH!");
};

const newEnemy = new Enemy(50, "soldier", 10);
const newDragon = new Dragon(100, "Drogon", 25, "green", "fire");

console.log(newEnemy);
console.log(newDragon);

newDragon.getInfo();
newDragon.attack();
newEnemy.block();

// This syntax works fine but can be quite hard to read and understand.
// It's JavaScripts way of emulating what is known in other programming languages, as classes.
// There is a newer and simplified syntax that helps with JavaScripts OOP code legibility.
// This in covered in the following lecture!
