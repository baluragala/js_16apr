function* generateMessages() {
  console.log(1);
  console.log(2);
  yield;
  console.log(3);
  console.log(4);
  yield;
  console.log(5);
}

// const mixSugarAndCoffeePowder = () =>
//   setTimeout(() => console.log("Coffee done..."), 500);

// const goGetMilk = () =>
//   setTimeout(() => {
//     console.log("Got milk");
//   }, 2000);
// const boilMilk = () =>
//   setTimeout(() => {
//     console.log("Milk is boiled");
//   }, 1000);

const goGetMilk = () =>
  new Promise((resolve, reject) => setTimeout(resolve("Got Milk"), 2000));

const boilMilk = () =>
  new Promise((resolve, reject) => setTimeout(resolve("Milk boiled"), 1000));

const mixSugarAndCoffeePowder = () =>
  new Promise((resolve, reject) => setTimeout(resolve("coffee done"), 500));

function* makeCoffee() {
  yield goGetMilk();
  yield boilMilk();
  yield mixSugarAndCoffeePowder();
}

var it = makeCoffee();

it.next().value.then(message => {
  console.log(message);
  it.next().value.then(message => {
    console.log(message);
    it.next().value.then(message => {
      console.log(message);
    });
  });
});
