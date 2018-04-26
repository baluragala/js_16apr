/* 
1. go and get milk - 2 secs
2. boil milk - 1 sec
3. mix sugar and coffee powder - .5 secs
*/

const mixSugarAndCoffeePowder = () =>
  setTimeout(() => console.log("Coffee done..."), 500);

const goGetMilk = nextTask =>
  setTimeout(() => {
    console.log("Got milk");
    nextTask(mixSugarAndCoffeePowder);
  }, 2000);
const boilMilk = nextTask =>
  setTimeout(() => {
    console.log("Milk is boiled");
    nextTask();
  }, 1000);

goGetMilk(boilMilk);

// function makeCoffee() {
//   setTimeout(() => {
//     console.log("Got milk");
//     setTimeout(() => {
//       console.log("Milk is boiled");
//       setTimeout(() => console.log("Coffee done..."), 500);
//     }, 1000);
//   }, 2000);
// }
