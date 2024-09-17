document.querySelector("#grandparent").addEventListener("click",() => {
    console.log("Grandparent clicked");
});

document.querySelector("#parent").addEventListener("click",() => {
    console.log("Parent clicked");
});

document.querySelector("#child").addEventListener("click",() => {
    console.log("Child clicked");
},false);

// above -> we didn't pass 3rd argument, which by default takes as false hence behaves in BUBBLING mode

// click child -> child, parent, grand parent gets called
// click parent -> parent, grand parent gets called
// click grandparent -> grandparent gets called


