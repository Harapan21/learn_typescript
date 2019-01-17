var var_val = 123;

if (true) {
  var var_val = 456;
}
console.log(var_val); // 456

// let only access in block-scope
let let_val = 123;

// if (true) {
//   let let_val = 456;
//   console.log(let_val); //456
// }
console.log(let_val); //123

// const cannot re-declare or assign
const bar_val = 123;
// if (true) {
//   const bar_val = 456; //error
// }
console.log(bar_val);
