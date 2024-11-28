let multiply = function(x,y) {
    console.log(x*y);
}
// with BIND
multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

multiplyByThree = multiply.bind(this, 3);
multiplyByThree(3);

// with CLOSURE
let multiplyWithClosure = (x) => {
   return (y) => {
    console.log(x*y);
   }
}

let byTwo = multiplyWithClosure(2);
byTwo(50);

