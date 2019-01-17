// for in
// get index
var someArray = [9, 2, 5];
for (let item in someArray) {
  console.log(item); // 0,1,2
}

// for of
// get value
for (let item of someArray) {
  console.log(item); //9,2,5
}

let hello = " is it me you're looking for";

for (let char of hello) {
  console.log(char); // is it me you're looking for? (by each char)
}
