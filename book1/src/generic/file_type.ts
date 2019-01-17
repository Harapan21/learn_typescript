//primitive type

var num: number;
var str: string;
var bool: boolean;
var power: any;

num = 123;
num = 123.456;

str = "123";

bool = true;
bool = false;

console.log(typeof num, typeof str, typeof bool, typeof power);

let boolArray: boolean[];
boolArray = [true, false];

console.log(boolArray);

//interface

interface Name {
  first: string;
  second: string;
}
var nama: Name;
nama = {
  first: "harapan",
  second: "Pardamean"
};

function log(message: string): void {
  console.log(message);
}
log("return void");

//union type

function formatCommandLine(command: string[] | string): void {
  var line = "";
  if (typeof command === "string") {
    line = command.trim();
  } else {
    line = command.join(", ").trim();
  }
  console.log(line);
}

formatCommandLine(["this", "is", "array"]);
formatCommandLine("this is tring");

//tuple type
var nameNumber: [string, number];
nameNumber = ["this is tuple", 39043];
console.log(nameNumber);

//type alias

type StrOrNum = string | number;
var sample_type_alias: StrOrNum;
sample_type_alias = 123;
sample_type_alias = "sah";

console.log(sample_type_alias); //sah
