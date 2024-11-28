"use strict"

// this in global space 
// JS can't just run on browser it can run on smart watch, mobile, nodeJS
// there's JS runtime envt
// inside browser GlobalObject is different inside nodeJS it is different
// inside browser it is WINDOW
// inside node it is GLOBAL
console.log(this); //global object, window object 



// this inside a function
//in global space vs in function this is different but how?
// this keyword works differently in strict and non strict mode
// if STRICT value of "this" => undefined inside a fn
// if NON STRICT value of "this" => window inside a fn
function x() {
    console.log(this);
}
x();
window.x();

// this in strict mode - (this substitution)

// if value of this is undefined or null
// this = window (substituted only when NON STRICT mode)

// STRTCT MODE
// this value also depends on "how FN" is called during run-time binding?
// x() => undefined  (called without any reference of object)
//  window.x() => window

const obj = {
    a:10,
    x: function () {
        console.log(this);
        console.log(this.a);
    }
}

obj.x(); // will reference to object

// call apply bind
const student = {
 name: "Lucky",
 printName : function () {
    console.log(this.name);
 }
}

const student2 = {
    name: "Shubhangi"
}

student.printName.call(student2);

// this inside arrow fn
// doesn't have their own THIS, it takes from value from enclosing lexical context

const person = {
    name: "Lucky",
    printName : () => {
       console.log(this); // the value of this will not be this object 
       // but value will be enclosing lexical context
       // o/p => window obj
    }
}

person.printName();

const person2 = {
    name: "Shubhangi Modi",
    printName: function () {
        const y = () => {
            console.log(this);
        }
        y();
    }
}

person2.printName();

// this inside DOM => reference to HTML ele