const restParam = (first: any, second: any, ...rest: any) => {
  console.log(first);
  console.log(second);
  console.log(rest);
};

restParam("foo", "bar", "foo", "bar", "bas", "qux");
