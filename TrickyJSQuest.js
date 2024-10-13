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
// -------Q2----------------
// function test() {
//     console.log(a); // ?
//     let a = 10;
//     console.log(a); // ?
// }
// test();
// -------Q3----------------
// const name ="Lucy"
// const person = {
//     name: 'Alice',
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//         (() => {
//             console.log(`Hello again, my name is ${this.name}`);
//         })();
//     },
// };

// (() => {
//     console.log(`Hello again, my name is ${name}`);
//     const name="Shubhangi"
//     console.log(`Hello again, my name is ${name}`);
// })()

// person.greet(); // ?
// -------Q4---------------
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000); // ?
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(() => console.log(j), 1000); // ?
// }
// -------Q5-------
// function Animal() {
//     this.sound = 'roar';
// }

// Animal.prototype.makeSound = function () {
//     console.log(this.sound);
// };

// const lion = new Animal();
// lion.makeSound();
// lion.sound = 'growl';
// lion.makeSound(); // ?

// delete lion.sound;
// lion.makeSound(); // ?
// -------Q6---imp----

function outer(callback) {
    let x = 10;
    callback();
}

let x = 20;
outer(function () {console.log(x);}); 

// -------Q7------
function series(n) {
    let count = 0;
    return () => {
        count++;
        console.log(count*n);
    }
}

const series2 = series(2);
const series5 = series(5);

series2();
series2();
series2();
series2();

series5();
series5();
series5();
series5();

// --------Q8------
// function createMultiplier(multiplier) {
//     return function (number) {
//         return number * multiplier;
//     };
// }
// const double = createMultiplier(2);
// const triple = createMultiplier(3);
// console.log(double(5)); // ? 10
// console.log(triple(4)); // ? 12
// console.log(createMultiplier(10)(3)); // ? 30
// --------Q9------
// function first() {
//     console.log('First');
// }

// function second(callback) {
//     setTimeout(() => {
//         console.log('Second');
//         callback();
//     }, 0);
// }

// function third() {
//     console.log('Third');
// }

// second(first);
// third(); // ?
// --------Q 10------
// const obj = {
//     value: 10,
//     calculate: function (callback) {
//         callback(this.value);
//     },
// };

// const show = function (v) {
//     console.log(v);
// };

// const showDouble = function (v) {
//     console.log(v * 2);
// };

// obj.calculate(show); // ?
// obj.calculate(showDouble); // ?
// --------Q 11------
// let counter = 10;
// function modifyCounter(operation) {
//     return function () {
//         counter = operation(counter);
//         console.log(counter);
//     };
// }

// const increment = modifyCounter((x) => x + 1);
// const decrement = modifyCounter((x) => x - 2);
// increment(); // ?
// decrement(); // ?
// increment(); // ?
// --------Q 12------
// function createArray() {
//     const result = [];
//     for (var i = 0; i < 3; i++) {
//         result.push(() => console.log(i));
//     }
//     return result;
// }

// const arr = createArray();
// arr[0](); // ?
// arr[1](); // ?
// arr[2](); // ?
// --------Q 13------
// function add(x) {
//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         };
//     };
// }

// console.log(add(1)(2)(3)); // ?
// console.log(add(5)(10)(-5)); // ?

// --------Q 14------
// let count = 0;

// function incrementer() {
//     count++;
//     return function () {
//         count++;
//         console.log(count);
//     };
// }

// const inc1 = incrementer();
// const inc2 = incrementer();

// inc1(); // ?
// inc2(); // ?
// inc1(); // ?
// --------Q 15------

// function createLoggers() {
//     const loggers = [];
//     for (let i = 0; i < 3; i++) {
//         loggers.push(() => console.log(i));
//     }
//     return loggers;
// }

// const logArray = createLoggers();
// logArray[0](); // ?0
// logArray[1](); // ?1
// logArray[2](); // ?2
// --------Q 16------
// function delayedLogs() {
//     for (var i = 0; i < 3; i++) {
//         setTimeout(() => console.log(i), i * 1000);
//     }
// }

// delayedLogs(); // ?
// --------Q 17------
// let x = 10;

// function outer() {
//     let x = 20;
//     function inner() {
//         let x = 30;
//         console.log(x);
//     }
//     return inner;
// }

// const innerFunc = outer();
// innerFunc(); // ?
// --------Q 18------
// let x = 5;

// (function immediate() {
//     console.log(x); // ?
//     let x = 10;
//     console.log(x); // ?
// })();

// --------Q 19------
// function adder(base) {
//     return function (num) {
//         return base + num;
//     };
// }

// const addFive = adder(5);
// const addTen = adder(10);

// console.log(addFive(2)); // ? 7
// console.log(addTen(3)); // ? 13
// console.log(adder(20)(5)); // ? 25
// --------Q 20------
// let value = 1;

// (function immediateA() {
//     let value = 2;
//     (function immediateB() {
//         console.log(value);
//     })();
// })();
// --------Q 21------
for (let i = 0; i < 3; i++) {
    document.body.addEventListener('click', function () {
        console.log(i);
    });
}


