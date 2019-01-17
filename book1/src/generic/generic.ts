interface Array<T> {
  reverse(): T[];
}

function reverse<T>(items: T[]): T[] {
  var toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}
var sample = [1, 2, 3];

var reversed = reverse(sample);
console.log(reversed);

reversed[0] = 0;

var numArr = [1, 2];
var reverseNums = numArr.reverse();
console.log(reverseNums);
