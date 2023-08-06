// prorotypal inheriteance and the prototype chain
// object literal
const person = {
  alive: true
};

const musician = {
  plays: true
};

// musician.__proto__ = person; //person is the parent for musician
Object.setPrototypeOf(musician, person); //the same result
Object.getPrototypeOf(musician); // {alive: ture}

console.log(musician.plays); //true
console.log(musician.alive); //true

console.log(musician);

const guitarist = {
  strings: 6,
  __proto__: musician
};

console.log(guitarist.alive); //true
console.log(guitarist.plays); // true
console.log(guitarist.strings); // 6

// The proto value must be object or null .
// An object can only directly inherit from one object

const car = {
  doors: 2,
  seats: 'vinyal',
  get seatMaterial() {
    return this.seats;
  },
  set seatMaterial(material) {
    this.seats = material;
  }
};

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
