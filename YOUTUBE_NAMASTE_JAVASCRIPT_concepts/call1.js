let name = {
    firstname : "Shubhangi",
    lastname : "Modi",
    fullName : function () {
        console.log(this.firstname +" "+ this.lastname);
    }
}

name.fullName();

let name2 = {
    firstname : "John",
    lastname : "Mayer",
}

name.fullName.call(name2);

// function borrowing
// we can borrow functions from other objects & use it with data of some other objects

// each and eveyr method in JS has access to this SPECILA FN call()

// call fn takes 2 arguments 
// 1) REFERENCE what will "this" to point to
// 2) arguments to the function on which we are calling call() on