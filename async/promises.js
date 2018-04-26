/*
3 states
1. pending
2. resolved / fullfilled
3. rejected 
*/

let p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("Party done!!"), 3000);
});

p
  .then(() => console.log("thank you!!"))
  .catch(() => console.log("thats bad!!!"));
//////-----------------------------------------------
const goGetMilk = () =>
  new Promise((resolve, reject) => setTimeout(resolve("Got Milk"), 2000));

const boilMilk = () =>
  new Promise((resolve, reject) => setTimeout(resolve("Milk boiled"), 1000));

const mixSugarAndCoffeePowder = () =>
  new Promise((resolve, reject) => setTimeout(resolve("coffee done"), 500));

goGetMilk()
  .then(message => {
    console.log(message);
    return boilMilk();
  })
  .then(message => {
    console.log(message);
    return mixSugarAndCoffeePowder();
  })
  .then(message => console.log(message));

//-- multiple promises

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 resolved"));
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 resolved"));
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 resolved"));
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p4 resolved"));
});

Promise.all([[[p1, p2, p3, p4]]]).then(results => console.log(results));
