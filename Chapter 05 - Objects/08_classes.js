// 8. Classes

// Refactor the code from the lesson prior:
class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
  getInfo() {
    console.log(this.life, this.name, this.level);
  }
}

// With classes you do not need to add the prototype, as it automatically does this.
// BEFORE: Enemy.prototype.getInfo = function(){...}

const turtle = new Enemy(25, "Squaturtle", 10);
const bug = new Enemy(1, "boogmon", 1);

console.log(turtle, bug);
turtle.getInfo();
bug.getInfo();

// Create specific attack:
class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);
    // 'super' and 'extends' replaces the need for Enemy.call(this, life, name, level).
    // We extended the class to Enemy and we created a constructor function.
    // Super runs and executes Enemy so we can have access to those properties.

    this.legs = legs;
    this.dmg = dmg;
  }
}

// As soon as we 'extend' to Enemy, we inherit all the properties and methods (as long as we call super).

const newBug = new Bug(10, "Buggy", 2, 6, 10);
console.log(newBug);

newBug.getInfo();
