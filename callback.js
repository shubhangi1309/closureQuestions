// ------Q1--------
// function outer() {
//     let count = 0;
//     function inner() {
//       count++;
//       console.log(count); // ?
//     }
//     return inner;
//   }
  
//   const fn = outer();
//   fn(); // 1
//   fn(); // 2
//   outer()(); // 1
// ------Q2--------
//   function asyncCallback() {
//     console.log('Start'); // ?
//     setTimeout(() => {
//       console.log('Timeout 1'); // ?
//     }, 0);
//     console.log('Middle'); // ?
//     setTimeout(() => {
//       console.log('Timeout 2'); // ?
//     }, 100);
//     console.log('End'); // ?
//   }
  
//   asyncCallback();
// ------Q3-----imp---EXPLAIN-----
// const obj = {
//     print: function () {
//       console.log(this.value); // ?
//     },
//   };
  
//   function executeCallback(callback) {
//     callback();
//   }
// value = 200;
// executeCallback(obj.print);
// executeCallback(() => obj.print());
// ------Q4--------
// let arr = [1, 2, 3];

// function mutateArray(callback) {
//   arr.push(4);
//   callback();
// }

// function logArray() {
//   console.log(arr); // ?
// }

// mutateArray(logArray); // ? 
// console.log(arr); // ?
// ------Q 5--------
// function multipleCallbacks(callback) {
//     callback();
//     setTimeout(callback, 1000);
//   }
  
//   let x = 0;
  
//   multipleCallbacks(() => {
//     x++;
//     console.log(x); // ?
//   });
// ------Q 6--------
// const arr = [1, 2, 3, 4];
// arr.forEach((num, index, array) => {
//   if (num % 2 === 0) {
//     array.splice(index, 1); 
//   }
// });
// console.log(arr); // ?

// ------Q 7--------
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000); // ?
//   }
  
// ------Q 8--------
// function conditionalCallback(flag, callback) {
//     if (flag) {
//       callback();
//     } else {
//       console.log('Callback not executed'); // ?
//     }
//   }
  
// conditionalCallback(false, () => console.log('Callback executed'));  
// ------Q 9--------
// function outer(callback) {
//     console.log('Outer'); // ?
//     callback(() => {
//       console.log('Inner'); // ?
//     });
//   }
  
//   outer((innerCallback) => {
//     console.log('Middle'); // ?
//     innerCallback();
//   });
// ------Q 10------EXPLAIN--
// function safeCallback(callback) {
//     try {
//       callback();
//     } catch (e) {
//       console.log('Error caught: ', e.message); // ?
//     }
//   }
  
//   safeCallback(() => {
//     throw new Error('Oops!');
//   }); // ?
  
// ------Q 11------EXPLAIN--
function outer(callback) {
    let x = 10;
    callback();
}

let x = 20;

outer( () => {console.log(x);}); 


// let name = "Shubhangi Modi";
//     var obj = {
//         name: "Harshit Modi",
//         tags: ["developer","Coder","Engineer"],
//         showTags(){
//           this.tags.forEach(function (tag) {
//             // console.log(this);
//             console.log( tag, this.name,)
//           })
//         }
//       }

// obj.showTags();