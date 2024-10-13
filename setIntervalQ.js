// let count = 0;

// const timer = setInterval(function () {
//     console.log("Learning setTimeout ", count);
//     count++;
// }, 1000);

// clearInterval(timer);
// ----------------------------------------------------
// console.log('Start');
// setTimeout(() => console.log('Timeout 1'), 1000);
// setTimeout(() => console.log('Timeout 2'), 500);
// setTimeout(() => console.log('Timeout 3'), 0);
// console.log('End');
// ----------------------------------------------------
// for (var i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// ----------------------------------------------------
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, i * 1000);
//   }
// ----------------------------------------------------
//   console.log('First');
//   setTimeout(() => console.log('Second'), 0);
//   console.log('Third');
// ----------------------------------------------------
// function createCounter() {
//     let count = 0;
//     return {
//         increment: function () {
//             count++;
//             console.log(count);
//         },
//         reset: function () {
//             count = 0;
//             console.log(count);
//         },
//     };
// }

// const counter1 = createCounter();
// counter1.increment(); // ?
// counter1.increment(); // ?
// const counter2 = createCounter();
// counter2.increment(); // ?
// counter1.reset();     // ?
// counter2.increment(); // ?
// -----------------------------------------
// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// console.log('D');
// -----------------------------------------
// setTimeout(() => {
//     console.log('First Timeout');
//     setTimeout(() => {
//       console.log('Second Timeout');
//       setTimeout(() => {
//         console.log('third Timeout');
//         setTimeout(() => {
//             console.log('fourth Timeout');
//           }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// -----------------------------------------
//   new Promise((resolve, reject) => {
//     console.log('Inside Promise');
//     setTimeout(() => {
//       resolve('Resolved');
//     }, 1000);
//   }).then(result => console.log(result));
//   console.log('Outside Promise');
// -----------------------------------------
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log('Interval:', count);
//   count++;
//   if (count === 3) {
//     clearInterval(intervalId);
//   }
// }, 1000);

// setTimeout(() => {
//   console.log('Timeout executed');
// }, 2500);
// -----------------------------------------
// let count = 0;

// function recursiveTimeout() {
//   if (count < 3) {
//     console.log('Timeout:', count);
//     count++;
//     setTimeout(recursiveTimeout, 1000);
//   }
// }

// setTimeout(recursiveTimeout, 1000);

// let intervalCount = 0;
// const intervalId = setInterval(() => {
//   if (intervalCount < 3) {
//     console.log('Interval:', intervalCount);
//     intervalCount++;
//   } else {
//     clearInterval(intervalId);
//   }
// }, 1000);
// -----------------------------------------
// const timeoutId = setTimeout(() => {
//     console.log('This will not run');
//   }, 1000);

// const intervalId = setInterval(() => {
// console.log('Interval running');
// }, 1000);
  
// clearTimeout(timeoutId);

// setTimeout(() => {
//     clearInterval(intervalId);
// }, 2500);
// -----------------------------------------
// setInterval(() => {
//     console.log('Interval Start');
//     setTimeout(() => {
//       console.log('Timeout Inside Interval');
//     }, 500);
//   }, 1000);
// -----------------------------------------
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log('Interval count:', count);
//   while (count < 2) {
//     console.log('Inside while:', count);
//     count++;
//   }
// }, 1000);


