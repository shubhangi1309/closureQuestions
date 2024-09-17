// Flyweight factory
class CoffeeFlavourFactory {
    constructor() {
        this.flavours = {};
    }

    getFlavour(flavourName) {
        if (!this.flavours[flavourName]) {
            this.flavours[flavourName] = new CoffeeFlavour(flavourName);
        }
        return this.flavours[flavourName];
    }

    getNumberOfFlavours() {
        return Object.keys(this.flavours).length;
    }
}

// Flyweight
class CoffeeFlavour {
    constructor(flavourName) {
        this.flavourName = flavourName;
    }
}

// Context class
class Order {
    constructor(tableNumber) {
        this.tableNumber = tableNumber;
        this.flavours = [];
    }

    addFlavour(flavour) {
        this.flavours.push(flavour);
    }

    serve() {
        console.log(`Serving order for table ${this.tableNumber}:`);
        this.flavours.forEach(flavour => {
            console.log(`- ${flavour.flavourName}`);
        });
    }
}

// Usage
const coffeeFlavourFactory = new CoffeeFlavourFactory();

const order1 = new Order(1);
order1.addFlavour(coffeeFlavourFactory.getFlavour("Cappuccino"));
order1.addFlavour(coffeeFlavourFactory.getFlavour("Cappuccino"));
order1.addFlavour(coffeeFlavourFactory.getFlavour("Latte"));
order1.serve();

const order2 = new Order(2);
order2.addFlavour(coffeeFlavourFactory.getFlavour("Espresso"));
order2.serve();

console.log(`Number of flavours created: ${coffeeFlavourFactory.getNumberOfFlavours()}`);
