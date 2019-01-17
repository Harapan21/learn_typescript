// interface Iterator<T> {
//   next(value?: any): IteratorResult<T>;
//   return?(value?: any): IteratorResult<T>;
//   throw?(e?: any): IteratorResult<T>;
// }

// interface IteratorResult<T> {
//   done: boolean;
//   value: T;
// }

class Component {
  constructor(public name: string) {}
}

class Frame implements Iterable<Component> {
  constructor(public name: string, public components: Component[]) {}

  [Symbol.iterator]() {
    let pointer = 0;
    let components = this.components;

    return {
      next(): IteratorResult<Component> {
        if (pointer < components.length) {
          return {
            done: false,
            value: components[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }
}
let frame = new Frame("Door", [
  new Component("top"),
  new Component("bottom"),
  new Component("left"),
  new Component("right")
]);
for (let cmp of frame) {
  console.log(cmp.name);
}
