// ------Q1--------
// (function () {
//     console.log(a); // ?
//     var a = 10;
//     console.log(a); //?
// })();

// ------Q2 --------
// var x = 10;

// (function () {
//     console.log(x); // ?
//     var x = 20;
//     console.log(x); //?
// })();

// console.log(x); // ?
// ------Q3 --------
// for (var i = 0; i < 3; i++) {
//     (function (j) {
//         setTimeout(() => console.log(j), j * 1000);
//     })(i);
// }
// ------Q4--------
// let x = 5;

// (function () {
//     console.log(x); // Reference error can;t access x is not initialised
//     let x = 10;
//     console.log(x); // ?
// })();
// ------Q5--------
// (function (x) {
//     console.log(x); // 20
//     x = 30;
//     console.log(x); // 30
// })(20);

// console.log(typeof x); // undefined

// ------Q6--------
// let x = 100;

// (function outer() {
//     let x = 200;
//     (function inner() {
//         let x = 300;
//         console.log(x); // 300
//     })();
//     console.log(x); // 200
// })();

// console.log(x); // 100

// ------Q7 ------important--
// let obj = {
//     a: 1,
//     b: (function () {
//         console.log("62=",this.a); 
//         return function () {
//             console.log("64=",this.a); 
//         };
//     })(),
// };

// let fn = obj.b;
// fn.call({ a: 10 }); 
// fn();
// ------Q 8 --------
// (function () {
//     var count = 0;
//     (function () {
//         count++;
//         console.log(count);
//     })();
//     console.log(count); 
// })();
// ------Q 9-----important---
// (() => {
//     let a = 1;
//     (() => {
//         console.log(a); 
//         a = 2;
//         console.log(a); 
//     })();
//     console.log(a); 
// })();

// (function (){
//     let a = 1;
//     (function() {
//         console.log(a); 
//         let a = 2;
//         console.log(a); 
//     })();
//     console.log("what=",a); 
// })();

// ------Q 10---important-----
// const person = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//         (() => {
//             console.log(`Hello again, my name is ${this.name}`);
//         })();
//     },
// };

// person.greet();