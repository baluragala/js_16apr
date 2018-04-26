console.log(1);
console.log(2);
console.log(3);
console.log(4);
setTimeout(() => {
  console.log(5);
  setTimeout(() => {
    console.log(6);
    setTimeout(() => {
      console.log(7);
      console.log(8);
      console.log(9);
    }, 1000);
  }, 50);
}, 100);
