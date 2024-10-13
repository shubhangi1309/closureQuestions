// BEGINEER
// Factorial
function factorial(n) {
    if(n===0) {
        return 0;
    }
    else if(n===1) {
        return 1;
    }
    return n*factorial(n-1);
}
// Fibonacci
function fibonacci(n) {
    if(n===0) return 0;
    if(n===1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

// sum of digits
function sumOfDigits(n) {
    if(n===0) return 0; //base case
    return n%10+sumOfDigits(Math.floor(n/10)); //recursive case
}

// reverse a string
function reverseString(str) {
    if(str==="") {
        return "";
    }
    return reverseString(str.splice(1))+str[0];
}