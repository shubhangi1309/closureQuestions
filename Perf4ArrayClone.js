// Compare 2 Ways to Clone Array:
// 1. Concat. (FASTER)
// 2. Spread Operator.

function measureTime(name, func) {
    console.time(name);
    func();
    console.timeEnd(name);
}

function concatFn() {
    let a= [1,2,3,4];
    let b= [5,6,7,8];
    let arr = new Array(100_000).fill(1);
    return arr.concat();
}

function spreadOpFn() {
    let a= [1,2,3,4];
    let b= [5,6,7,8];
    let arr = new Array(100_000).fill(1);
    return [...arr];
}


measureTime('concatFn', concatFn);
measureTime('spreadOpFn', spreadOpFn);