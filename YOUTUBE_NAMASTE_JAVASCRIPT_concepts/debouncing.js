// DEBOUNCING IN JS
let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data...",counter++);
}

const DEBOUNCEdoSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, delay);
    }
}

const betterFunction = DEBOUNCEdoSomeMagic(getData, 300)

// magic to be done on getData that on every key stroke API shouldn't get called,
// rather call while user pauses while typing
// if only difference of time b/w 2 key presses is greater than 300ms then call API