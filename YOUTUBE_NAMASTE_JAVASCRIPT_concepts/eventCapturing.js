document.querySelector("#grandparent").addEventListener("click",(e) => {
    // e.stopPropagation();
    console.log("Grandparent clicked");
}, true);

document.querySelector("#parent").addEventListener("click",(e) => {
    e.stopPropagation();
    console.log("Parent clicked");
}, true);

document.querySelector("#child").addEventListener("click",(e) => {
    // e.stopPropagation();
    console.log("Child clicked");
},true);

// above ->  3rd argument = true, hence behaves in CAPTURING mode

// click child -> grandparent clicked, parent clicked, child clicked gets called
// click parent ->  grandparent clicked, parent clicked, gets called
// click grandparent ->  grandparent clicked gets called


// TRICKLING DOWN THE HEIRARACHY