for (let index = 0; index < 5; index++) {
  console.log(5);
}
console.log('index:', index);
for (var index = 0; index < 5; index++) {
  console.log(5);
  setImmediate(() => {
    console.log(index);
  }, 1000);
}
