
function memorize(func) {
    const results = {};
    return (...args) => {
        const argsKey = JSON.stringify(args);
        if(!results[argsKey]) {
            results[argsKey] = func(...args);
        }
        return results[argsKey];
    };
};

const clumsysquare = memorize((num) => {
    let result = 0;
    for(let i = 1; i<=num; i++) {
        for(let j = 1; j<=num; j++) {
            result++;
        }
    }
    return result++;
});

console.time("First call");
console.log(clumsysquare(10000));
console.timeEnd("First call");


console.time("Second call");
console.log(clumsysquare(10000));
console.timeEnd("Second call");
