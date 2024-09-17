let name = {
    firstname : "$$$$$Shubhangi$$$$$",
    lastname : "$$$$Modi$$$$",
}

fullName = function (hometown) {
    console.log(this.firstname +" "+ this.lastname);
    console.log("from "+hometown);
}

fullName.call(name,"Jaipur");

let name2 = {
    firstname : "John",
    lastname : "Mayer",
}

fullName.call(name2,"USA");