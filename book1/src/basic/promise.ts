// Chaining
let item1: { id: number }, item2: { id: number };
loadItem(1)
  .then(res => {
    item1 = res;
    return loadItem(2);
  })
  .then(res => {
    item2 = res;
    console.log("done");
  }); // overall time will be around 2s

// Parallel
Promise.all([loadItem(1), loadItem(2)]).then(res => {
  [item1, item2] = res;
  console.log("done");
}); // overall time will be around 1s
