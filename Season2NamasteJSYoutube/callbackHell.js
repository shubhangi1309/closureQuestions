const cart = ["shoes","jeans","shirt","scarf"];


// passing callback function so execute ASYNC code in desired order
// createOrder takes callback proceedToPayment
// proceedToPayment takes callback showOrderSummary
// showOrderSummary takes callback updateWallet

// example of CALLBACK HELL
// code starts to grow horizontally (PYRAMID OF DOOM) instead of vertically => 
// UNREADABLE & UNMAINTAINABLE

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {

            api.updateWallet()

        })

    })

})

// INVERSION OF CONTROL
// when you loose control of code while using callbacks
// when we pass callback fn we are passing control of our callback fn to another code
// we don't know what might happen, it might get called twice, it might not get called at all



