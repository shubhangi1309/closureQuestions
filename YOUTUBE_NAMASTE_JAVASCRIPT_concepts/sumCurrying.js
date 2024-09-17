let sum = function(a) {
    return function(b) {
        return b ? sum(a+b) : a;
    }
}

console.log(sum(1)(1)(2)(3)());