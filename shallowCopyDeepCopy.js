// const person = { name: 'John', address: { city: 'New York' } };
// const shallowCopyPerson = { ...person };
// console.log(shallowCopyPerson.name);
// shallowCopyPerson.address.city = 'Los Angeles';
// shallowCopyPerson.name = 'Jane';
// console.log(person.name);
// console.log(person.address.city); // ?
// console.log(shallowCopyPerson.name);
// console.log(shallowCopyPerson.address.city); // ?

// ---------------------
// const original = { x: 10, y: { z: 20 } };
// const deepCopy = JSON.parse(JSON.stringify(original));

// deepCopy.y.z = 99;

// console.log(original.y.z); // 20
// console.log(deepCopy.y.z); // 99
// -----
// const original = { a: 1, b: { c: 2 } };
// const shallowCopy = Object.assign({}, original);

// shallowCopy.b.c = 42;

// console.log(original.b.c); // ?
// console.log(shallowCopy.b.c); // ?

// const arr = [1, 2, 3];
// const result = arr.map((num, index, array) => {
//   array[index + 1] = num * 2; 
//   return num;
// });

// console.log("result=",result); // ? 1, 2, 4, 6, 
// console.log(arr);    // ? [1,2,3]

// -------------------imp------
// const obj = {
//     multiplier: 2,
//     multiply(arr) {
//       return arr.map(function (num) {
//         return num * this.multiplier;
//       });
//     },
//   };
  
//   console.log(obj.multiply([1, 2, 3])); // ?
  // -------------------imp------
//   const arr = [1, 2, 3];
// const mapped = arr.map(num => {
//   if (num % 2 === 0) return;
//   return num * 2;
// });

// console.log(mapped); // 2, undefined, 6

  // -------------------------


  // -------------------------
  // -------------------------
  // -------------------------
 