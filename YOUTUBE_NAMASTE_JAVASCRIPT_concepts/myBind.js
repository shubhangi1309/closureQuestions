let name = {
    fn: "Shubhangi",
    ln: "Modi"
}

let printName = function (hometown, state, country) {
    console.log(this.fn+" "+this.ln+" "+hometown+" "+state+" "+country);
}

printNameBrowserBind = printName.bind(name, "Jaipur", "Rajasthan");
printNameBrowserBind("India");


Function.prototype.bindPolyfill = function (...args) {
    let obj = this;
    let params = args.slice(1);
    console.log("params-",params);
    return function (...args2) {
        console.log("args2-",args2);
        console.log("args[0]-",args[0]);
        obj.apply(args[0],[...params, ...args2]);
    }
}

let bp = printName.bindPolyfill(name,"Rome", "Italy");
bp("Europe");

