// delete vs assign undeifined

console.time("Method 1");
const obj1 = {name: "Shubhangi Modi", powerRanger: "No"}; 
delete obj1.powerRanger;
console.log(obj1);
console.timeEnd("Method 1");

console.time("Method 2");
const obj2 = {name: "Shubhangi Modi", powerRanger: "Yes"}; 
obj1.powerRanger = undefined;
console.log(obj2);
console.timeEnd("Method 2");

console.time("Method 3");
const obj3 = {name: "Shubhangi Modi", powerRanger: "Yes"}; 
const {powerRanger,...newObj3} = obj3;
console.log(newObj3);
console.timeEnd("Method 3");