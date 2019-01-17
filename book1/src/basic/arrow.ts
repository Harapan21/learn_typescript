const Person = (age: number) => ({
  age,
  growOld: () => this.age++
});

var person = Person(1);

setTimeout(person.growOld, 1000);
setTimeout(() => {
  console.log(person.age); // 2
}, 2000);

var growOld_arrow = person.growOld;

growOld_arrow();
console.log(person.age); // 3

class Adder {
  constructor(protected a: number) {}
  add = (b: number): number => {
    return this.a + b;
  };
}
class Child extends Adder {
  callAdd(b: number): number {
    return this.add(b);
  }
  print() {
    console.log(this.a);
  }
}

const child = new Child(123);

console.log(child.callAdd(123)); //246
child.print();
