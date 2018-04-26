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
