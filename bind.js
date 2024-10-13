function multiply(x,y) {
    return x*y;
}
//BIND
// const mulByTwo = multiply.bind(this,2);
// console.log(mulByTwo(5));
// const mulByThree = multiply.bind(this,3);
// console.log(mulByThree(5));

// above thing with CLOSURE
function multiply(x) {
    return (y) => {
        return x*y;
    }
}

const mulByTwo = multiply(2);
console.log(mulByTwo(5));
const mulByThree = multiply(3);
console.log(mulByThree(5));