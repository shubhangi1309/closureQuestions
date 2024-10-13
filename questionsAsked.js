// ------GOOGLE-----
// function foo() {
// let x = (y = 0);
// x++;
// y++;
// return x;
// }
// console.log(foo(), typeof x, typeof y);

// function foo() {
//   return;
//   {
//     message: "Hello World";
//   }
// }
// console.log(foo());

// let i;
// for (i = 0; i < 3; i++) {
//   const log = () => {
//     console.log(i);
//   }
//   setTimeout(log, 100);
// }

// function myFunction() {
//   "use strict";
//   y = 3.14;  
// console.log(y)
// }

// [arguments]

// Input: a.b.c.d
// output: (
// a : {
//     b: {
//        c: 'd'
//      }
//   }
// }

// function convertToObj(input) {
//   let obj = {};
//   let arr = input.split('.');
//   arr.reduce(ele => {
//     return " "
//   })
//   for(let i=0; i< arr.length; i++) {
//     obj[arr[i]] = "{arr[i+1]: {}}";
//   }
//   return obj;
// }

//   const arr = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const arr = [1,2,3];
// const mapped = arr.map(obj => {
//   obj *= 10;
//   return obj;
// });

// console.log(mapped); // 10 20 30
// console.log(arr);    // same

// 23 SEPT 2024 => ADOBE Q1 => Timer.html program has 
// setTimeout
// setInterval
// ADOBE Q2 => implement DEBOUNCE