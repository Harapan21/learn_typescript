console.log(1 << 0);
console.log(1 << 10);
console.log(1 ^ 1);
console.log(~0);
console.log(1 >> 2);
let a: any = "this.is";
let fakeKey: string = "p";
let b: any =
  "Click the button to display characters of the specified unicode numbers."; // 00001000

// let and: any = (a |= b);
console.log(`word : ${b}`);
console.log(`key : ${a}`);

function encrypt(kata: string, key: string): string {
  let arrayAscii: number[] = [],
    KeyAscii: number[] = [],
    _xor: any[] = [];
  for (let item of kata) {
    let generatetoAscii = item.charCodeAt(0);
    arrayAscii.push(generatetoAscii);
  }
  for (let k of key) {
    let generatetoAscii = k.charCodeAt(0);
    KeyAscii.push(generatetoAscii);
  }
  for (let i = 0; i < arrayAscii.length - 1; i++) {
    _xor.push(arrayAscii[i] ^ KeyAscii[i % KeyAscii.length]);
  }
  _xor.map(
    (bit: number, index: number): void => {
      _xor[index] = String.fromCharCode(bit);
    }
  );

  return _xor.join("");
}
function decrypt(kata: string, key: string): string {
  let arrayAscii: number[] = [],
    KeyAscii: number[] = [],
    _xor: any[] = [];
  for (let item of kata) {
    let generatetoAscii = item.charCodeAt(0);
    arrayAscii.push(generatetoAscii);
  }
  for (let k of key) {
    let generatetoAscii = k.charCodeAt(0);
    KeyAscii.push(generatetoAscii);
  }
  for (let i = 0; i < arrayAscii.length - 1; i++) {
    _xor.push(arrayAscii[i] ^ KeyAscii[i % KeyAscii.length]);
  }
  _xor.map(
    (bit: number, index: number): void => {
      _xor[index] = String.fromCharCode(bit);
    }
  );
  return _xor.join("");
}

let result_encrypt = encrypt(b, a);
let result_decrypt = decrypt(result_encrypt, a);
let result_false = decrypt(result_encrypt, fakeKey);
console.log("encrypt: ", result_encrypt);
console.log("decrypt: ", result_decrypt);

console.log("false: ", result_false);
