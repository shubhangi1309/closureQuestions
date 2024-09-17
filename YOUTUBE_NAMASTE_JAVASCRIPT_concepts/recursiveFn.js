let finalObject = {};

let magicFunction = (inputObject, parent) => {
    for(let key in inputObject) {
        if(typeof(inputObject[key]) === Object) {
            magicFunction(inputObject[key], parent+"_"+key);
        }
        else {
            finalObject[parent+"_"+key] = inputObject[key];
        }
    }
}


magicFunction(user,"user");

let user = {
    name : "Shubhangi",
    address: {
        personal: {
            city: "Jaipur",
            area: "Ramnagar"
        },
        office: {
            city: "Bengalore",
            area: {
                landmark : "White field"
            }
        }
    }
}