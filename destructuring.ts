var foo = {
  bar: {
    bas: 123
  }
};

console.log(foo); // { bar: { bas: 123 } }

var rect = { x: 0, y: 10, width: 15, height: 20 };
var { x, y, width, height } = rect;

console.log(x, y, width, height); //0 10 15 20

rect.x = 10;
({ x, y, width, height } = rect); //assign to existing variables using outer parentheses
console.log(x, y, width, height); //10 10 15 20

const obj = { "some property": "some value" };
const { "some property": someProperty } = obj;
console.log(someProperty === "some value"); // true

var efficiently = { bar: { bas: 123 } };
var {
  bar: { bas }
} = foo;
console.log(bas); //123

var { w, x, ...remaining } = { w: 1, x: 2, y: 3, z: 4 };
console.log(w, x, remaining); // 1 2 { y: 3, z: 4 }

var x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2,1

var [x, y, ...rest] = [1, 2, 3, 4];
console.log(x, y, rest);
