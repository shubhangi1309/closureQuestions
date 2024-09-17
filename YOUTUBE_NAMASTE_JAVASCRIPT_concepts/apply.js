let name = {
    firstname : "$$$$$Shubhangi$$$$$",
    lastname : "$$$$Modi$$$$",
}

fullName = function (hometown) {
    console.log(this.firstname +" "+ this.lastname);
    console.log("from "+hometown);
}

fullName.apply(name,["Jaipur"]);

let name2 = {
    firstname : "John",
    lastname : "Mayer",
}

fullName.call(name2,["USA"]);

// in apply we pass arguments in array list

