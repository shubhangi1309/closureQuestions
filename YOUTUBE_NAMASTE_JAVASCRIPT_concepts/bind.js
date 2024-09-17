let name = {
    firstname : "$$$$$Shubhangi$$$$$",
    lastname : "$$$$Modi$$$$",
}

fullName = function (hometown,state) {
    console.log(this.firstname +" "+ this.lastname);
    console.log("from "+hometown+" "+state);
}


let name2 = {
    firstname : "John",
    lastname : "Mayer",
}


// bind method
// instead of directly calling the method, bind method binds the method with object and returns the copy of the method

let fullNameCopy = fullName.bind(name, "Jaipur","Rajasthan");

// there is a catch here, it doesn't directly call this method, how it happened in call, apply
// rather it returns a method which can be called later
// bind and keep a copy of a method and use it later
