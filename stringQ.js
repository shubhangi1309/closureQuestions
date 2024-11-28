function reverseString(str) {
    return str.split("").reverse().join('');
}

function checkPalindromeString(str) {
    return str === str.split("").reverse().join('');
}

function countNumberOfVowelsInString(str) {
    const vowels = "aeiouAEIOU";
    let count= 0;
    for(let char of str) {
        vowels.includes(char) && count++;
    }
    return count;
}