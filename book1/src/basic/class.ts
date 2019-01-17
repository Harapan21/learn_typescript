class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);

console.log(p3); // Point { x: 10, y: 30 }

class Point3D extends Point {
  z: number;
  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }
  add(point: Point3D) {
    var point2D = super.add(point);
    return new Point3D(point2D.x, point2D.y, this.z + point.z);
  }
}

var p1_3D = new Point3D(0, 10, 20);
var p2_3D = new Point3D(20, 20, 30);
var p3_3D = p1_3D.add(p2_3D);

console.log(p3_3D); // { x: 10, y: 30, z: 50 }

class Something {
  //make method static intances
  static intances = 0;

  constructor() {
    // intances++ means intances + 1
    Something.intances++;
  }
}
var s1 = new Something(); // 1
var s2 = new Something(); // s1 = 1, s1+1
console.log(Something.intances); // 2

class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

var foo = new FooBase();
foo.x;
// foo.y; , Error : private
// foo.z; , Error : protected

class FooChild extends FooBase {
  constructor() {
    super();
    this.x;
    // this.y; // Error : private
    this.z; // Error : protected
  }
  print_protected() {
    return this.z;
  }
}
var foochild = new FooChild();
foochild.x;
// foochild.z; Error : Protected
foochild.print_protected(); // Okay

class FooWithArray {
  mambers: string[] = [];
  add(x: string) {
    this.mambers.push(x);
  }
  getArray() {
    return this.mambers;
  }
}

let array = new FooWithArray();
array.add("hallo");
console.log(array.getArray()); // ["hello"]
